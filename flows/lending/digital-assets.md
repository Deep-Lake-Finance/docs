# Deep Lake Flow APIs - Lending

## Introduction

So what is a "flow"? A flow is a high level abstraction for a multi-user interaction around Bitcoin transactions.
For example, with ordinal lending, you might normally expect to have a borrower and a lender. And we can define their interaction
into two conceptual areas:

1. the loan data ( collateral,amount,interest, duration, etc )
2. the loan progress ( offered,active,repaid,liquidated, etc )

These two, together, identify a Flow!

The Flow API silently tracks the progress of a lending process, and allows the developer to only focus on providing the correct data for the current state.

Note that we havent talked about Bitcoin Script, DLCs, PSBTs, or Taproot. Flows abstract the need to track these Bitcoin primitives for app developers.

Of course, your users will still need to sign PSBT messages, but the developer focuses on the FLOW.

## Setting the stage

A loan between borrower and lender usually involves collateral, a loan amount, a loan duration, and an interest rate.  
There are two outcomes of this loan:

1. repayment: the borrower repays and claims their collateral
2. liquidation: the borrower does not repay and gets liquidated. Here the lender claims the collateral.

The life of a loan follows in some well-defined stages:

1. A lender offers capital with specific terms (interest, duration, etc)
2. A borrower offers collateral for some portion of that capital at the terms specified
3. The borrower locks the collateral
4. The loan amount is transferred to the borrower

The loan is completed when:

5. The borrower repays the loan
6. The borrower claims their collateral

or

5. The lender liquidates the loan and claims the collateral

In order to execute some of these steps, you'll need signatures from your users.

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

### Create the flow

To create a flow, simplty call the flow 'execute' endpoint with an empty body

```javascript
const flowId = fetch('https://api.test.deeplake.fi/api/flows/execute',
  {
     method: 'POST',
     headers: {
         'Authorization': 'FLOWORDLENDTEST',
         'Content-Type': 'application/json'
     }
 }
```

### Creete an offer

Have your user sign in with Unisat, Leather, or XVerse, and get their _cardinal_ wallet address, as well as the _cardinal_ public key. Then create an offer by calling the flow 'execute' endpoint with offer data.

```javascript

const offerData = {
    "where": {
      id: flowId
    },
    "data": {
      "fee": 100,
      "amount": "1000",
      "buyer": {
        "cardinal": {
          "value": "CARDINAL_ADDRESS",
          "publicKey": "CARDINAL_PUBLIC_KEY"
        }
      },
      "expiry": "YOUR_DATE_HERE"
    }
}

const flowId = fetch('https://api.test.deeplake.fi/api/flows/execute',
  {
     method: 'POST',
     headers: {
         'Authorization': 'FLOWORDLENDTEST',
         'Content-Type': 'application/json'
     },
     data: offerData
 }

```

Awesome! You've created a loan offer. Lets broadcast it to the Bitcoin chain. To do that, we'll update the flow state, and include the transaction data as bsae64.

```javascript

const broadcastData = {
    "where": { "id": flowId },
    "data": {
      "state": "broadcast-offer",
      "transactions": [{"base64": "SIGNED_BASE64_VALUE"}]
    }
}

const flowId = fetch('https://api.test.deeplake.fi/api/flows/execute',
  {
     method: 'POST',
     headers: {
         'Authorization': 'FLOWORDLENDTEST',
         'Content-Type': 'application/json'
     },
     data: broadcastData
 }

```

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "spend",
    "fee": 100,
    "seller": {
      "utxo": {
        "id": "UTXO_ID",
        "sequence": 0
      },
      "ordinal": {
        "value": "ORDINAL_ADDRESS",
        "publicKey": "ORDINAL_PUBLIC_KEY"
      },
      "cardinal": {
        "value": "CARDINAL_ADDRESS",
        "publicKey": "CARDINAL_PUBLIC_KEY"
      }
    },
    "expiry": "YOUR_DATE_HERE"
  }
}
```

### 4. Execute Spend Signature

Execute the spend transaction signature.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "execute-spend-signature",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

### 5. Repay

Initiate a repay action.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "repay",
    "amount": "1000",
    "fee": 100
  }
}
```

### 6. Broadcast Repay

Broadcast the repay action.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "broadcast-repay",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

### 7. Claim

Initiate a claim action.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "claim",
    "fee": 300
  }
}
```

### 8. Execute Claim Signature

Execute the claim transaction signature.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "execute-claim-signature",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

### 9. Liquidate

Initiate a liquidation action.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "liquidate",
    "fee": 100
  }
}
```

### 10. Execute Liquidate Signature

Execute the liquidate transaction signature.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "execute-liquidate-signature",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

### 11. Cancel

Initiate a cancel action.

**Payload**:

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "claim",
    "fee": 300
  }
}
```

**Note**: Always replace placeholders (like `FLOW_ID`, `CARDINAL_ADDRESS`, `SIGNED_BASE64_VALUE`, etc.) with actual values when using the payloads.

## Responses

The API will respond with a JSON object. You need to verify the documentation provided by Deeplake to understand the specific response format and handle the response accordingly. It's essential to check for errors and handle them gracefully in your application.
