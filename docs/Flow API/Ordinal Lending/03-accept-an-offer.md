## Accept the Offer

After creating a loan offer, the next step in the loan process is for the borrower to accept the offer provided by the lender. When the borrower decides to accept a loan offer, specific data is required to execute this step, including details about the borrower, as well as the transaction details.

#### Pre-requisites:

1. Ensure that the user (borrower) is authenticated, and you have their:

   - `ORDINAL_ADDRESS` and `ORDINAL_PUBLIC_KEY`.
   - `CARDINAL_ADDRESS` and `CARDINAL_PUBLIC_KEY`.

2. You need to know the specific `FLOW_ID` associated with the loan offer.

3. Ensure you have the `UTXO_ID` (Unspent Transaction Output ID) associated with the borrower's Ordinal. The 'UTXO_ID' and 'sequence' identify your borrower's Ordinal.

#### Steps to Accept the Offer:

##### 1. **Construct Accept Offer Data**:

Prepare the data object to accept the offer. Ensure to replace placeholders with actual values:

- Replace `FLOW_ID` with the specific ID of the loan flow you want to accept.
- Provide `UTXO_ID` associated with the borrower.
- Insert the `ORDINAL_ADDRESS` and `ORDINAL_PUBLIC_KEY`.
- Insert the `CARDINAL_ADDRESS` and `CARDINAL_PUBLIC_KEY`.
- Set an `expiry` date for this acceptance. This date typically denotes till when this acceptance is valid.

```json
const acceptOfferData = {
  where: { id: "FLOW_ID" },
  data: {
    state: "spend",
    fee: 100,
    seller: {
      utxo: {
        id: "UTXO_ID",
        sequence: 0,
      },
      ordinal: {
        value: "ORDINAL_ADDRESS",
        publicKey: "ORDINAL_PUBLIC_KEY",
      },
      cardinal: {
        value: "CARDINAL_ADDRESS",
        publicKey: "CARDINAL_PUBLIC_KEY",
      },
    },
    expiry: "YOUR_DATE_HERE",
  },
};
```

##### 2. **Send Accept Offer Data**:

Execute a `POST` request to the Deep Lake Flow API's execute endpoint. Handle the response asynchronously, and make sure to log any errors:

```javascript
const borrowResponse = await fetch(
  "https://api.test.deeplake.fi/api/flows/execute",
  {
    method: "POST",
    headers: {
      Authorization: "FLOWORDLENDTEST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(acceptOfferData),
  }
);
const borrowerData = await borrowResponse.json();
```

#### Result:

After providing the borrower data, we must broadcast the transaction to the Bitcoin blockchain.

### Broadcast Accept Offer


```json
const broadcastAcceptData = {
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "execute-spend-signature",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

```javascript
const broadcastAcceptResponse = await fetch(
  "https://api.test.deeplake.fi/api/flows/execute",
  {
    method: "POST",
    headers: {
      Authorization: "FLOWORDLENDTEST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(broadcastAcceptData),
  }
);
const broadcastData = await broadcastAcceptResponse.json();
```