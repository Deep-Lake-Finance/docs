# Ordinal Staking 

## Setup:

- We'll be utilizing Bitcoin Testnet. You'll need Testnet Bitcoin.
- We'll be using Deep Lake's FLOW API Endpoint to execute create and broadcast Bitcoin transactions: https://api.test.deeplake.fi/api/flows/execute
- Set the Content-Type header to `application/json`.
- For authentication, you'll use an API key. For this tutorial, you can use API KEY 'FLOWORDLENDTEST' for the Testnet.



## 1. Create a FLOW

Creating a flow is as simple as performing a `POST` request to the Deep Lake Flow API's execute endpoint. Given that this is an initialization step, the request body remains empty. Ensure to handle the response asynchronously and cater for potential errors:

```javascript

const headers = {
    'Content-Type: 'application/json',
    'Authorization': 'FLOWORDLENDTEST'
}

const res = await fetch("https://api.test.deeplake.fi/api/flows/execute", {
  method: "POST",
  headers,
});

const { id } = await res.json();
const flowId = id;
```

After the successful completion of this request, you'll obtain a `flowId`. This ID is paramount, as it references the specific loan flow in subsequent actions like crafting and broadcasting loan offers.

Ensure to securely store and manage the `flowId`, as it's essential for the rest of the loan process.


## 2. Identify the Staking parameters

Ensure that you have the `flowId` from the flow creation step. This ID represents the specific flow that the staking pertains to. The staker must authenticate through platforms like Unisat, Leather, or XVerse. From this, gather:

   - `CARDINAL_ADDRESS` (staker's wallet address)
   - `CARDINAL_PUBLIC_KEY`
   - `ORDINAL_ADDRESS` (staker's ordinal wallet)
   - `ORDINAL_PUBLIC_KEY`



##### 1. **Construct Staking Data**:

```javascript
const stakeData = {
  where: {
    id: "FLOW_ID",
  },
  data: {
    fee: 100,
    buyer: {
      utxo: {
        id: "UTXO_ID",
        sequence: 0,
      },
      ordinal: {
        value: "ORDINAL_ADDRESS",
        publicKey: "ORDINAL_PUBLIC_KEY",
      },

    },
    expiry: "YOUR_DATE_HERE",
  },
};

const stakeResponse = fetch("https://api.test.deeplake.fi/api/flows/execute", {
  method: "POST",
  headers: {
    Authorization: "FLOWSTAKETEST",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(stakeData),
});

const stakeTxn = await stakeResponse.json();
```

Let's look at the code here.  

We start by forming the staking Flow data (`stakeData`), identified with `flowId` that we created in our initialization step. The stakeData consists of the Bitcoin network fee (`fee`), an ordinal (`utxo.id,utxo.sequence`), and and expiry date (`expiry`).

We then send a `POST` request to our endpoint with the stakeData.  In the background, the Deep Lake API create's a Bitcoin lock using tapscript, including the conditions for spending (unlocking) from that lock.  In this case, our only condition is that the Ordinal will be locked until a specific time has passed.  Of course the API allows you to create multiple conditions, if necessary, including the ability to whitelist only specific Ordinals for staking.

The result of this is a `stakeTxn`.  `stakeTxn` is a PSBT that your user will need to sign with the wallet of their choice.  Once the user sign's the PSBT, you're ready to broadcast that transaction, and the user's Ordinal will be locked.  Let's look at those steps here:


```javascript
const stakingBroadcastData = {
  where: { id: "FLOW_ID" },
  data: {
    state: "broadcast-offer",
    transactions: [{ base64: "SIGNED_BASE64_VALUE" }],
  },
};

const broadcastResponse = fetch("https://api.test.deeplake.fi/api/flows/execute", {
  method: "POST",
  headers: {
    Authorization: "FLOWSTAKETEST",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(stakingBroadcastData),
});

const broadcastResult = await broadcastResponse.json();

```

Again, let's review what we're doing here.  Again, we start by creating our data payload.  In this case, our user has signed the PSBT, and we add that to the payload identified by the same `flowId` that we've been using.  We then send a `POST` request to the Deep Lake Flow API endpoint with the broadcast data.

The API will process this data, and broadcast a Bitcoin transaction.  Upon successful completion of this request, your staking request is now broadcasted and recorded on the Bitcoin blockchain. Always monitor the returned data from the API to understand the next steps or to verify the broadcast status.

Remember, broadcasting a transaction is a vital step, effectively making the loan offer public and immutable. Ensure all data is accurate and valid before broadcasting.
