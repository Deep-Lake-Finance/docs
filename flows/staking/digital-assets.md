# Deep Lake Flow APIs - Staking

## Introduction

So what is a "flow"? A flow is a high level abstraction for a multi-user interaction around Bitcoin transactions.
For example, with ordinal staking, you might normally expect to have staking and unstaking operations. And we can define the user staking interactions into two conceptual areas:

1. the stake data ( collateral,amount,interest, duration, etc )
2. the stake state ( created, broadcast staking txn, unstake, broadcast unstaking )

These two, together, identify a Flow!

The Flow API silently tracks the state of a staking process, and allows the developer to only focus on providing the correct data for the current state.

Note that we havent talked about Bitcoin Script, DLCs, PSBTs, or Taproot. Flows abstract the need to track these Bitcoin primitives for app developers.

Of course, your users will still need to sign PSBT messages, but the developer focuses on the FLOW.

## Create a flow

The flows you can create depend on the api key that is used. For these examples, we'll use the key 'FLOWORDLENDTEST' in testnet. In production, you'll have a unique, random key.

## Endpoint

```
POST https://api.test.deeplake.fi/api/flows/execute
```

## Headers

```javascript
Content-Type: application/json
Authorization: YOUR_ACCESS_TOKEN // FLOWORDLENDTEST
```

### Introduction

For this, you need to get the `MY_COMPANY_API_KEY`, `product.id` from the <span style="color: red; font-size: 20px; font-style: bold">supporting Team.</span>

Staking follows these 3 steps:

```
1. Create Escrow
2. Sign with your wallet
3. Broadcast your transaction to network
```

Unstaking follows these 3 steps:

```
1. Unlock escrow
2. Sign with your wallet
3. Broadcast your transaction to network
```

### Getting Started

#### Create the staking escrow:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  fee: 200,
  staker: {
    utxo: {
      id: "dfca815a2f9b25df446e851d4a6ac98ed0ecf8cd871e12998052bc2a66de859e",
      sequence: 0,
    },
    ordinal: {
      value: "tb1p2kap5nsfakxsnfacywnp6qwppza0cqk2423krtekhdek88sfdqtse2fkf1",
      publicKey:
        "03d0bc04edde7d0e515bd69e01b01275b760a49f7b2bb5e8baad3d6820ea632bbd",
    },
    cardinal: {
      value: "2N1mLRYwgHDPFUvUYaAbBh1FDjqY9cVraDN",
      publicKey:
        "1527224d68008a5b8f8cq4ffc10cb7f347d0374cb2fd4357e30c4b27afe89bca",
    },
  },
  expiry: "2023-09-21 18:25:29.812238",
  product: {
    id: 11,
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute`,
  { data },
  { headers }
);
```

<p style="font-size: 18px; color: yellow">Parameter Explanation</p>

`fee`
when use create the escrow, you need to cost depend on this fee

`staker`
the main data that consist of inscription's utxo, ordinal and cardinal address

<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`utxo`
the utxo of inscription that you want to staking.
you can get this by using this api.

```javascript
https://api-testnet.unisat.io/wallet-v4/inscription/utxo?inscriptionId={inscriptionId}
```

<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`ordinal, cardinal`
This address is responsible for inscrition stored address and payment address<br>
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>For example, the ordinal address is Taproot address and payment address is another one.

`expiry`
This is depend on when escrow get unlock.

### Sign and broadcast the staking escrow:

```javascript
const qs = require("qs");
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "broadcast-stake",
  transactions,
  product: {
    id: 11,
  },
};
const where = qs.stringify({ where: { id: flow.id } });
const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute?${where}`,
  { data },
  { headers }
);
```

<p style="font-size: 18px; color: yellow">Parameter Explanation</p>

`state`
The action type what you are doing with Deep Lake API

`transactions`
The action type what you are doing with Deep Lake API

```javascript
transaction = [
  {
    hex: { transactionHex },
  },
];
```

<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`transactionHex` is hex data that come from the response from creating escrow

### Unlock the staking escrow:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "unstake",
  fee: 200,
  index: 0,
  product: {
    id: 11,
  },
};
const where = qs.stringify({ where: { id: flow.id } });
const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute?${where}`,
  { data },
  { headers }
);
```

<p style="font-size: 18px; color: yellow">Parameter Explanation</p>

`index`
???

### Sign and broadcast the unlock:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "broadcast-unstake",
  transactions,
  product: {
    id: 11,
  },
};
const where = qs.stringify({ where: { id: flow.id } });

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute?${where}`,
  { data },
  { headers }
);
```

<p style="font-size: 18px; color: yellow">Parameter Explanation</p>

The flow API uses these APIs under the hood:

#### Escrow:

- Create Escrow
- Execute Escrow
- Broadcast Escrow
- Collateral API
- Asset API
- Action API

#### Outcomes:

- Create Outcomes and integration with the oracle
- Check one Outcome

#### Signatures:

- Execute signature

#### Logs:

- Audit trails
