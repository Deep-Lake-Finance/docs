### Create the collateral:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  fee: 100,
  borrower: {
    cardinal: {
      amount: 100,
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

### Sign and broadcast the collateral:

```javascript
const qs = require("qs");
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "broadcast-lock",
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

### Unlock the collateral:

```javascript
const qs = require("qs");
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "unlock",
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
const qs = require("qs");
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  state: "broadcast-unlock",
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
