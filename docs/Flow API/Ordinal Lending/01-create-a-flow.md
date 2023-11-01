# Create a Flow

Creating a flow is as simple as performing a `POST` request to the Deep Lake Flow API's execute endpoint. Given that this is an initialization step, the request body remains empty. Ensure to handle the response asynchronously and cater for potential errors:

```javascript
const res = await fetch("https://api.test.deeplake.fi/api/flows/execute", {
  method: "POST",
  headers: headers,
});

const { id } = await res.json();
const flowId = id;
```

#### Result:

After the successful completion of this request, you'll obtain a `flowId`. This ID is paramount, as it references the specific loan flow in subsequent actions like crafting and broadcasting loan offers.

Ensure to securely store and manage the `flowId`, as it's essential for the rest of the loan process.

Next: [Create an offer](create-an-offer.md)
