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
