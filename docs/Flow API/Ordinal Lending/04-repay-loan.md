# Deep Lake Ordinal Lending Flow API: Repay Loan

After receiving a loan, a borrower will eventually need to repay it. The Deep Lake Flow API facilitates this through a two-step process: firstly, initiating the repayment action, and secondly, broadcasting this action to the network. Below are the detailed steps and explanations for each.

### Pre-requisites:
1. Make sure you have the `FLOW_ID` handy. This is the identifier for your specific loan flow.

### Steps to Initiate Repayment:

#### 1. **Formulate the Repayment Payload**:
You need to create a JSON payload that carries crucial details about the repayment. Replace `FLOW_ID` with your specific loan flow ID. Ensure that the `amount` and `fee` accurately reflect the terms of your loan.


{% tabs %}
{% tab title="javascript" %}
```javascript
const repayData = {
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "repay",
    "amount": "1000",
    "fee": 100
  }
}

const repayResponse = await fetch(
  "https://api.test.deeplake.fi/api/flows/execute",
  {
    method: "POST",
    headers: {
      Authorization: "FLOWORDLENDTEST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(repayData),
  }
);
const repay = await repayResponse.json();


```
{% endtab %}

{% tab title="rust" %}
```rust
// TODO: rust code here
```
{% endtab %}

{% tab title="java" %}

// TODO: java code here

{% endtab %}
{% endtabs %}


{% tabs %}
{% tab title="xverse" %}
```javascript
import { signTransaction, getAddress } from "sats-connect";

const sign = (repay.psbt, indexes) => {  // TODO: what is 'indexes'?  confirm repay.psbt
  return new Promise((resolve, reject) => {
    const options = {
      payload: {
        network: {
          type: BITCOIN,
        },
        message: "Sign Transaction",
        psbtBase64: raw,
        inputsToSign: indexes,
      },
      onFinish: (_) => resolve({ base64: _.psbtBase64 }),
      onCancel: reject,
    };
    signTransaction(options);
  });
};

```


{% endtab %}
{% tab title="leather" %}

```javascript
// TODO: leather signing code goes here

```

{% endtab %}
{% tab title="unisat" %}

```javascript

// TODO: unisat signing code goes here

```
{% endtab %}
{% endtabs %}





#### 2. Broadcast Repay Action

After initiating the repayment, you must broadcast this action to make it official and recognized on the network.

### Pre-requisites:
1. The `FLOW_ID` should be the same one used in the repay initiation.
2. The `SIGNED_BASE64_VALUE` is the encoded transaction data that validates this action.

### Steps to Broadcast Repayment:

#### **Construct the Broadcast Payload**:
Your JSON payload for broadcasting will indicate the updated state of the flow and include the necessary transaction data for validation. Replace `FLOW_ID` and `SIGNED_BASE64_VALUE` with your specific flow ID and encoded transaction data, respectively.

```json
{
  "where": { "id": "FLOW_ID" },
  "data": {
    "state": "broadcast-repay",
    "transactions": [{ "base64": "SIGNED_BASE64_VALUE" }]
  }
}
```

### Executing the Repay and Broadcast Actions:

Both these actions are executed via a `POST` request to the Deep Lake Flow API's execute endpoint. Ensure to serialize your payload as a JSON string and correctly set the headers. The code for these requests would follow a similar structure to the earlier steps, substituting in the appropriate payload.

### Results:
By successfully completing these steps, you will have initiated and broadcast the loan repayment. It's crucial to monitor any responses from the API for confirmation or any errors. Accurate data entry and a clear understanding of the loan terms are imperative throughout this process to ensure smooth and successful repayment of your loan.