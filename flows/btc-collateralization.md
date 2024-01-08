### Create the collateral:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  where: {},
  data: {
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
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute`,
  data,
  { headers }
);
```

### Sign and broadcast the collateral:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  where: { id: flow.id },
  data: {
    state: "broadcast-lock",
    transactions,
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute`,
  data,
  { headers }
);
```

### Unlock the collateral:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  where: { id: flow.id },
  data: {
    state: "unlock",
    fee: 200,
    index: 0,
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute`,
  data,
  { headers }
);
```

### Sign and broadcast the unlock:

```javascript
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  where: { id: flow.id },
  data: {
    state: "broadcast-unlock",
    transactions,
  },
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/flows/execute`,
  data,
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
