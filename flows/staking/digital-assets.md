# Staking Flow

### Create the staking escrow:

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
