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