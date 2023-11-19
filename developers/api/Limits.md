The Deep Lake API uses a number of safeguards to help maximize its stability and protect calling apps from moving volumes of assets that are not allowed by the app developer. Users who send many requests that do not respect certain constraints will see error responses show up as status code `400`, including:

- A total BTC amount limiter that limits the maximum amount of BTC that can be moved by one asset in the assets array

- A total BTC amount limiter that limits the maximum amount of BTC that can be moved by the whole escrow

- A maximum number of assets limiter that limits the number of assets that can be included in one Escrow

- An asset nature limiter that limits the nature of assets that can be moved inside of the organization that edits the App (`BTC/Sat`, `Ordinals`, `BRC-20`, ...)

- A collection limiter that limits the set of collections that can be moved inside of the organization that edits the App (`Bitcoin Frogs`, `OMB`, `BTC DeGods`, ...)

- An inscription number limiter that limits the inscription numbers that can be moved inside of the organization that edits the App (`Bitcoin Frogs`, `OMB`, `BTC DeGods`, ...)

### How to configure an asset total BTC amount limiter:

```
const headers = { Authorization: MY_COMPANY_API_KEY };
const data = {
  type: "max-amount-per-asset"
  limitItems: [{ value: { amount: 1000000 } }]
};

const { data: escrow } = await axios.post(
  `${DEEP_LAKE_REST_API_URL}/limits`,
  data,
  { headers}
);
```

This API call will create a new limit that will protect all new escrows created under `MY_COMPANY` to only move amounts of less than `1000000` sats.
