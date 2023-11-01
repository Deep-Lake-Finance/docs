# Create an Offer

Crafting a loan offer requires specifics about the loan, such as the amount, fee, and details about the borrower (referred to as the "buyer" in this context).

#### Pre-requisites:

1. Ensure that you have the `flowId` from the flow creation step. This ID represents the specific loan flow that the offer pertains to.
2. The borrower must authenticate through platforms like Unisat, Leather, or XVerse. From this, gather:
   - `CARDINAL_ADDRESS` (Borrower's wallet address)
   - `CARDINAL_PUBLIC_KEY`

#### Steps to Create the Offer:

##### 1. **Construct Offer Data**:

Formulate your offer data structure. Replace placeholders with the actual values:

- Replace `FLOW_ID` with the specific ID from the loan flow initiation step.
- Populate `CARDINAL_ADDRESS` and `CARDINAL_PUBLIC_KEY` with the borrower's details.
- Determine the fee and amount for the loan.
- Define an `expiry` date for the offer, indicating its validity period.

```javascript
const offerData = {
  where: {
    id: "FLOW_ID",
  },
  data: {
    fee: 100,
    amount: "1000",
    buyer: {
      cardinal: {
        value: "CARDINAL_ADDRESS",
        publicKey: "CARDINAL_PUBLIC_KEY",
      },
    },
    expiry: "YOUR_DATE_HERE",
  },
};
```

##### 2. **Submit Offer Data**:

Execute a `POST` request to the Deep Lake Flow API's execute endpoint, transmitting your offer data. Handle the response asynchronously and account for potential errors:

```javascript
const offerResponse = fetch("https://api.test.deeplake.fi/api/flows/execute", {
  method: "POST",
  headers: {
    Authorization: "FLOWORDLENDTEST",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(offerData),
});
const offer = await res.json();
```

##### 3. **Broadcast Offer Data**:

Set up your data object for broadcasting. Remember to replace placeholders with the relevant actual values:

- Replace `FLOW_ID` with the ID of the loan flow you're broadcasting.
- Insert the `SIGNED_BASE64_VALUE` which represents the transaction data in base64 encoding.

```json
const broadcastData = {
  where: { id: "FLOW_ID" },
  data: {
    state: "broadcast-offer",
    transactions: [{ base64: "SIGNED_BASE64_VALUE" }],
  },
};
```

Make a `POST` request to the Deep Lake Flow API's execute endpoint, submitting your broadcast data. Handle the response asynchronously and ensure you manage any errors:

```javascript
const broadcastResponse = await fetch(
  "https://api.test.deeplake.fi/api/flows/execute",
  {
    method: "POST",
    headers: {
      Authorization: "FLOWORDLENDTEST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(broadcastData),
  }
);
const broadcast = await broadcastResponse.json();
```

#### Result:

Upon successful completion of this request, your loan offer is now broadcasted and recorded on the Bitcoin blockchain. Always monitor the returned data from the API to understand the next steps or to verify the broadcast status.

Remember, broadcasting a transaction is a vital step, effectively making the loan offer public and immutable. Ensure all data is accurate and valid before broadcasting.

Next: [Accept an offer](accept-an-offer.md)
