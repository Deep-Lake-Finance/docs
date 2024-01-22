# Introduction

Welcome to Deep Lake's Oracle Platform documentation. Our platform seamlessly connects off-chain data with on-chain Bitcoin operations, serving two key purposes:

1. **Providing Data**: Offers secure, timely data to Bitcoin applications, enabling real-world interactions in the Bitcoin ecosystem.
2. **Configurability for Developers**: Features flexible APIs for Bitcoin developers to set conditions and verify future events using various data feeds.

Deep Lake APIs enhance Bitcoin Transactions with smart, configurable Public Keys.

## How it works

The Deep Lake Oracle Platform operates through a sophisticated network consisting of two primary actors, ensuring a secure, decentralized, and multi-language compatible process for data attestation and transaction signing.

![](https://lh7-us.googleusercontent.com/SaFQg787pg-sc5iCmV04rwu8AcEo7wuIlh9bwVnjBfdLOGWiC91gZIhbh6wOKbdy0icdHbfPaMX__nPeejQAGPustpPdTkOruSwTzUrfgVLkxI1dYjll-s54Jf-QH6rKBKqpWFWRa15cYrv9g4LVP0o)

### The Two Actors

#### Leader

The Leader serves as the orchestrator of the signing process, playing key roles such as:

- Coordinating with Followers for attestation collection.
- Managing the signing process, ensuring all conditions are met.
- Acting as the central point for initiating transaction validations.

#### Followers

Followers are integral to the attestation and signing process, with functionalities including:

- Utilizing partial signing key pairs to contribute to the signing process.
- Implementing the MuSig2 protocol (as per [BIP-0327](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki)), enabling joint signatures without revealing private keys.

### Multi-Language Compatibility/Diversity

The Follower nodes in the Deep Lake Oracle Platform are designed for compatibility with multiple programming languages. Currently, we have implementations in Rust and TypeScript, catering to a range of developer preferences and project requirements.

### Attestation and Signing Process

1. **Condition Verification**: The Leader checks predefined conditions against real-world or on-chain data when verification is needed.

2. **Gathering Attestations**: Upon condition fulfillment, the Leader collaborates with Followers to collect their partial attestations.

3. **MuSig2 Protocol for Secure Signing**: These partial attestations are combined using the MuSig2 protocol, forming a complete signature without compromising individual private keys.

4. **Publication on Nostr**: The attestation is then published on Nostr, ensuring transparency and security of the record.

5. **Executing the Transaction**: Finally, any following transactions can utilize the published key to be executed, returning collateral on a paid loan, for instance.

### Data Feeds

Data feeds are modular and independently defined so that they are extensible and safe.

Available data feeds:

- **Movement**: Tracks BTC movements on-chain.
- **Signature**: Verifies user-generated signatures.
- **Fiat**: Monitors Fiat Currency movements (USD support).
- **API**: Allows custom API calls for attestation.

## APIs Overview

### Outcomes

An outcome in a Taproot Spending Path applies conditions to future events.

Example: A Taproot Script could hold BTC as loan collateral. It can be reclaimed upon loan repayment or liquidated if the borrower defaults.

Outcomes are spending paths that activate based on the loan's repayment status.

### Keypairs

For each BTC Taproot Script path, developers need a dedicated signing Keypair from the Oracle Platform.

- **Private Key**: Kept secret by signing nodes.
- **Public Key**: Given to developers for constructing Taproot Conditional Spending Paths.

### Conditions

A Keypair (and Outcome) derives spendability from developer-configured Conditions.

Example JSON:

```json
{
  "module": "movement",
  "filter": {
    "gt": { "createdDate": "2023-12-23T12:29:42.021927957+00:00" },
    "lt": { "createdDate": "2023-12-23T14:29:42.021927957+00:00" },
    "where": {
      "source": "3NAuFp7GNx3VbbdTgvdMvtopwLmi6eL1HR",
      "destination": "3EtuXD3KZWc3wQDDn9JcEEZpnfUsWrHz3L"
    }
  }
}
```

### Verification

Each Condition requires a verification object to confirm the occurrence using data feeds.

Example JSON:

```json
{
  "leftOperand": { "args": "value", "type": "formula", "operation": "sumBy" },
  "rightOperand": "10002",
  "operation": "isEqual"
}
```

## Example Usage

Let us assume we would like to build a Public Key for the Liquidation Path in our previous Example.

A Bitcoin Developer needs to call the Oracle’s Create Outcome API with the following data:

```json
{
  "description": "January 2024 Monthly Subscription",
  "tag": "Awesome Tag",
  "meta": {},
  "conditions": [
    {
      "module": "movement",
      "filter": {
        "gt": {
          "createdDate": "2023-12-23T12:29:42.021927957+00:00"
        },
        "lt": {
          "createdDate": "2023-12-23T14:29:42.021927957+00:00"
        },
        "where": {
          "source": "3NAuFp7GNx3VbbdTgvdMvtopwLmi6eL1HR",
          "destination": "3EtuXD3KZWc3wQDDn9JcEEZpnfUsWrHz3L"
        }
      },
      "verification": {
        "leftOperand": {
          "args": "value",
          "type": "formula",
          "operation": "sumBy"
        },
        "rightOperand": "10002",
        "operation": "isEqual"
      }
    }
  ]
}
```

This generates a key pair for a specified movement of Bitcoin, returning a spendable public key, if the conditions are met.

## Wrapping Up

The design of the Deep Lake Oracle Platform ensures decentralized operation with no single point of failure. The MuSig2 protocol enhances security, while the publication of attestations on Nostr adds an extra layer of trust and transparency. Moreover, the support for multiple programming languages like Rust and TypeScript broadens the platform's accessibility and adaptability, catering to a diverse developer community.

The Deep Lake Oracle Platform stands as a groundbreaking solution in the realm of Bitcoin development. By seamlessly bridging off-chain data with on-chain operations, and offering a robust, decentralized network of Leader and Follower nodes compatible with multiple programming languages, it opens up unprecedented possibilities for developers and entrepreneurs. Whether it's enhancing transactional security with the MuSig2 protocol, ensuring transparency through Nostr, or accommodating diverse coding preferences with Rust and TypeScript support, the Deep Lake Oracle Platform is poised to revolutionize how we interact with and leverage the Bitcoin blockchain. With this platform, we invite you to explore new frontiers in blockchain innovation, where reliability, flexibility, and security are paramount.
