# Deep Lake Ordinal Lending Flow API

A loan between borrower and lender usually involves collateral, a loan amount, a loan duration, and an interest rate. There are two outcomes of this loan:

1. the borrower repays and gets (claims) their collateral back
1. the borrower does not repay and gets liquidated (lender claims the collateral)

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

In order to execute some of these steps, you'll need signatures from yuour users.

### Steps to Use the API:

#### Setup:

- We'll be utilizing Bitcoin Testnet. You'll need
  Testnet Bitcoin.
- Endpoint to execute flows: https://api.test.deeplake.fi/api/flows/execute
- Set the Content-Type header to `application/json`.
- For authentication, you'll use an API key. For this tutorial, you can use API KEY 'FLOWORDLENDTEST' for the Testnet.

## Initializing a Loan Flow

Before creating a loan offer, the foundational step is to initiate a specific loan flow. Starting a loan flow sets the stage for subsequent actions like offering and accepting loans. This action doesn't require much data but is critical to obtaining the flow ID used later.

#### Pre-requisites:

1. API key: 'FLOWORDLENDTEST'

#### Steps to Initialize the Loan Flow:

##### 1. **Set Up Request Headers**:

Formulate your headers for the API call. This will involve setting the content type and providing the authorization key.

```javascript
const headers = {
  Authorization: "FLOWORDLENDTEST",
  "Content-Type": "application/json",
};
```

**Note**: Always replace placeholders (like `FLOW_ID`, `CARDINAL_ADDRESS`, `SIGNED_BASE64_VALUE`, etc.) with actual values when using the payloads.

## Responses

The API will respond with a JSON object. You need to verify the documentation provided by Deeplake to understand the specific response format and handle the response accordingly. It's essential to check for errors and handle them gracefully in your application.




Next: [Create a Flow](create-a-flow.md)
