# Ordinals Staking

Learn how to lock an Ordinal for use as staking collateral.

Most people in crypto are familiar with DeFi staking platforms used to earn passive income through locking tokens. The emergence of Ordinals on Bitcoin have brought even more novel use cases to staking.
In this document, we will discuss how to implement the staking Ordinals using the Deep Lake APIs, but the same process works for plain old satoshis.

The Ordinal Staking process applies to several of the meta-protocols built on top of Bitcoin including Ordinals, BRC-20, and other UTXO-based forms of value.

## Here are the high level steps:

1. The Ordinal holder locks their ordinal for a specified time.
1. Deep Lake's Oracle provides verification.
1. The Staking team provides whatever benefits they see fit.

In this guide, we'll only be covering Step 1. Let's get started!

## Assumptions:

The staker is going to pay for Bitcoin miner (network) fees.

## Technical Background

We are going to be using a few endpoints in the Deep Lake Platform:

### Escrow endpoints

- Create Escrow

### Asset endpoints

- Create Asset

### Outcome endpoints

- Create Outcome

For more information about these endpoints, please refer to this ​

Equipped with our technical tools, and magic APIs, let us get to it.

A. The borrower makes a borrowing request (three steps):

1. Create The Escrow

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  collateral: {
    assets: [],
  },
};
​
const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/escrows`,
  data,
  { headers }
);
```

2. Lock (Stake) the Ordinal

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  collateral: { id: escrow.collateral.id },
  type: "btc.utxo",
  content: {
    meta: {
      amount: "1000",
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
          tag: "reclaim",
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
          tag: "expire",
          args: [
            "2023-09-13T22:34:12Z",
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
​
const { data: asset } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/assets`,
  data,
  {
    headers,
  }
);
```

If you've read our ordinals lending guide, you'll recall that the <strong>LOCK</strong> action is a fundamental building block of Deep Lake's APIs. If not, I've just told you :).

<strong>LOCK's</strong> enable users to securely escrow BTC (whether plain BTC or Ordinals) and have it unlocked based on pre-defined conditions.

In this case, after the users ordinal is locked, they may reclaim (spend) their BTC under 1 of 2 conditions:
The user may choose to reclaim their staking.

A pre-defined staking period can expire.

Lets configure these conditions:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  tag: "some-tag",
  tag: "some-meaningful-description",
  conditions: [
    {
      module: "signature",
      filter: {
        isIn: [{outcome: {id: 1}}, {outcome: {id: 2}}, {outcome: {id: 3}}, ],
        gt: {
          createdDate: "2023-08-08T20:33:45+01:00"
        }
        lt: { createdDate: "2023-08-18T20:33:45+01:00" }
      }
    },
    {
      module: "time",
      filter: {
        where: { time: "now" },
      }
    },

  ],
};
​
const { data: outcome } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/outcomes`,
  data,
  {
    headers,
  }
);
```

3. Pay miner fees

```javascript
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

Our final action is the Fee action.

The fee action properties are simple, requiring only a type: fee and an empty configuration property.

If meta content property is empty, the fee will be estimated automatically.