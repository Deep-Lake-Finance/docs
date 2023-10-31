---
description: 'Ordinals: Digital Artifacts to build a liquid economy on top of Native Bitcoin'
---

# Ordinals Lending

We are witnessing two types of lending in the BTC ecosystem using the Deep Lake APIs and Ordinals.&#x20;

#### Collaborative escrow participation between lender and borrower&#x20;

<figure><img src="../../.gitbook/assets/Lending v1.gif" alt=""><figcaption><p>Ordinals Lending V1</p></figcaption></figure>

#### Two-Step Lending or Escrow chaining-based Lending

<figure><img src="../../.gitbook/assets/Lending v2.gif" alt=""><figcaption><p>Ordinals Lending V2</p></figcaption></figure>

**Sneak peek**: V2 is so much more fun 😀 and is a clear optimization over V1

In this document, we will discuss a piece of the first approach; and how to implement it using the Deep Lake APIs and Oracle.&#x20;

Collaborative lending represents the initial wave of lending protocols that emerged in the ecosystem following the advent of the Ordinal movement. People started looking at ways to use their ordinals or art assets to generate liquidity without selling them.&#x20;

In this approach, all participants in the lending process (lender, borrower, and marketplace) collaborate to finalize the PSBT (partially signed Bitcoin transaction) and subsequently broadcast it to the Bitcoin blockchain...&#x20;

Here is how it goes:&#x20;

1. _**The borrower makes a borrowing request**_&#x20;
2. The lender accepts the request
3. The marketplace adds its fee
4. The borrower signs the request
5. The lender signs the request&#x20;
6. Request gets broadcasted

In this post, we will focus on the first item. Let us dive into how you can achieve this with the Deep Lake APIs.&#x20;

## Assumptions:&#x20;

* The borrower is going to pay for the miner’s fee.&#x20;

## Technical Background

We are going to be using a few endpoints in the Deep Lake Platform:&#x20;

_**Escrow endpoints**_

* Create Escrow

_**Asset endpoints**_

* Create Asset

_**Outcome endpoints:**_&#x20;

* Create Outcome

For more information about these endpoints, please refer to this [link](https://app.gitbook.com/o/Ir1j6LPzYMla0CfUPCUv/s/YZTi1Gt0J6LIil6H7w6g/\~/changes/25/developers/api-reference).

Equipped with our technical tools, and magic APIs, let us get to it.&#x20;

### 1. The borrower makes a borrowing request:&#x20;

A borrowing request has three steps:&#x20;

#### Create the Escrow

{% code overflow="wrap" %}
```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  collateral: {
    assets: [],
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/escrows`,
  data,
  { headers}
);
```
{% endcode %}

#### Prepare the Lock of the Ordinals as the collateral

{% code overflow="wrap" fullWidth="false" %}
```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  collateral: { id: escrow.collateral.id },
  type: "btc.utxo",
  content: {
    meta: {
      amount: "1000" 
    },
    node: {
      id: "ecb714f01e247a46cd39e92d2b349c940c7f68bd275d9bc8b196c77159aa2f85",
      value: "tb1puk67w7gd389mwm0tn97dg3jrdalts8fdc368akq2vqvwsp2m3d7qahuwk6",
      sequence: 0,
      publicKey:
        "36260aee1a40d5148860e63aa659f4d7c157b62b0b597b0392394d5aca5a7e12",
    },
  },
  action: {
    configuration: {
      paths: [
        {
          fn: "identity",
          tag: "repay",
          args: [
            "03559ad6902ae6f93103038078c0c01934fe1a551273d433c303e03658b117daa6",
          ],
          addresses: [
            {
              type: "receive",
              value:
                "tb1puk67w7gd389mwm0tn97dg3jrdalts8fdc368akq2vqvwsp2m3d7qahuwk6",
            },
          ],
        },
        {
          fn: "time",
          tag: "liquidate",
          args: [
            "2023-09-13T22:34:12Z",
            "032d5beef9cc3bda7c083e6fb5a19d020f3c7e8a07155755ef0a9ec4f62efc63ea",
          ],
          addresses: [
            {
              type: "receive",
              value:
                "tb1p2kap5msfakxsnfacywnp6qwppza0cpk2423krtekhdek88sfdqtse2fkf0",
            },
          ],
        },
      ],
    },
    type: "lock",
  },
  addresses: [
    {
      type: "change",
      value: "tb1puk67w7gd389mwm0tn97dg3jrdalts8fdc368akq2vqvwsp2m3d7qahuwk6",
    },
  ],
};

const { data: asset } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/assets`,
  data,
  {
    headers,
  }
);
```
{% endcode %}

There is something special happening here: the **`Lock`** action.\
The **`Lock`** action is a fundamental feature of Bitcoin and the Deep Lake API, enabling users to securely escrow BTC (whether plain BTC or Ordinals) based on predetermined on-chain conditions.

\
In our current example, we would like to lock an Ordinal for a certain amount of time, after which we should have either repaid our loan or we were unable to repay the loan.&#x20;

1. Repayment will allow the borrower to unlock and claim back his collateral (the ordinal in this case)
2. Non-repayment will result in a liquidation of the collateral to the lender

A lot to unpack in this action, let us break it down. It has:&#x20;

* `Type`field: allows our APIs to identify which processing the caller is looking to apply on the asset he is creating
* `Configuration` field: allows our APIs to configure the processing.&#x20;

In this case, we would like to **`Lock`**, and we would like our **`Lock`** to either be:&#x20;

* Spendable upon a Repay event
* Spendable after an expiry date if no Repay was witnessed on chain

It is only natural that our configuration has two paths, each path corresponds to a future possible outcome.&#x20;

So question! How can we witness Outcomes on chain.&#x20;

Long answer here. \
Short answer, by simply asking our Oracle to check for some condition, and verify that these conditions happen and here is how to do that:&#x20;

{% code overflow="wrap" %}
```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  tag: "some-tag",
  tag: "some-meaningful-description",
  conditions: [
    {
      module: "movement",
      filter: {
        gt: { createdDate: "2023-09-10T21:52:34+00:00" },
        lt: { createdDate: "2023-09-24T21:52:34+00:00" },
        where: {
          source: "tb1q94nz6cy5tjg8npzm6nvqrdludakaarxneh5v6e",
          destination: "tb1qphza9nrkgypyqeacg98n5jk4m9ppvge0pnzwn8",
        },
      },
      verification: {
        leftOperand: { type: "formula", operation: "sumBy", args: "value" },
        rightOperand: "1000",
        operation: "isEqual",
      },
    },
  ],
};

const { data: outcome } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/outcomes`,
  data,
  {
    headers,
  }
);
```
{% endcode %}

This will return an outcome of the form:&#x20;

```typescript
const outcome = {
  id: "32",
  signature: {
    publicKey:
      "038fa95eb734125c2f6772141298c113d063df7d43e453b69e7050bba518c31f29",
  },
};
```

Another special thing is happening here, `publicKey`  has the same shape as the first element in the `args` array of the repay path, and the second element in the `args` array of the liquidate path.&#x20;

It does because it should go there. \
The idea, here, is to create one outcome with `tag: repay` and  another with `tag: liquidate` and use the `publicKey` of each one in the corresponding path.&#x20;

#### Pay for the miner fees

```typescript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  collateral: { id: escrow.collateral.id },
  type: "btc.address",
  content: {
    meta: {
      amount: 800,
    },
    node: {
      value: "2N1mJRYwgHDPFUvUYaAbBh1FDjqY9cVraDM",
      publicKey:
        "03d0bc04edde7d0e515bd64e01b01275b760a49f7b2bb5e8b3ad3d6820ea632bbd",
    },
  },
  action: {
    configuration: {},
    type: "fee",
  },
  addresses: [
    {
      type: "change",
      value: "2N1mJRYwgHDPFUvUYaAbBh1FDjqY9cVraDM",
    },
  ],
};

const { data: asset } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/assets`,
  data,
  {
    headers,
  }
);
```

OK, so another action here: the **`Fee`** action.

The  **`Fee`** action is a simple with:&#x20;

* `Type`: the processing is pay for fee using the asset this action is attached to.&#x20;
* `Configuration` field: empty configuration, because it is a simple action.&#x20;

The one thing that is special about this action is that it will automatically estimate for the network fees if the caller leaves the amount `field` empty, otherwise the caller can set the amount of fees he is willing to pay.&#x20;

### _That is a wrap! Rendezvous on the next post._&#x20;



\
