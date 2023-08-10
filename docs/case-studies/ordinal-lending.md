
# Use Cases - Ordinal Lending

> Creating an Ordinal lending protocol using Bitcoin Discreet Log Contracts (DLC) involves designing a trust-minimized
> system that enables borrowers to access loans while maintaining the security and trustlessness of the Bitcoin
> blockchain. In this protocol,lenders and borrowers engage in DLC smart contracts, allowing borrowers to lock up Ordinal
> collateral in a multisignature address while receiving a loan in return. The terms of the loan, such as interest rates
> and repayment deadline, are be encoded in a DLC contract. Conditions are established to define the contract outcomes
> (ie repayment amount and repayment deadline date). This mechanism ensures that borrowers meet their repayment
> obligations and that lenders are appropriately compensated. By leveraging Bitcoin\'s native scripting language, as
> well as Tapscript, and the Schnorr signature scheme, this protocol would provide a novel way to create trustless
> lending agreements while minimizing the need for intermediaries.  This system offers the first secure and transparent
> solution for ordinal lending within the cryptocurrency ecosystem.

## Architecture

![Ordinal Loan](../../static/img/ordinal-loan.png)

### Workflow

1. Borrower locks their Ordinal into a Loan Request Covenant. Bitcoin transaction fees apply.  These are the covenant inputs.
2. The Loan Request Transaction has the following outputs:
   1. The Ordinal Lock Covenant
   2. The miner (transaction) fee
   3. The borrower's change
3. The ordinal lock output and lender funding input create a funded loan request (Loan Funding Transaction).
4. Outputs from the Loan Funding Transaction are:
   1. The Lender Funding Covenant
   2. The miner (transaction) fee
   3. The lenders' change
5. Finally, the borrower signs the lender funding covenant and receives the Funding amount

## Scenario

When combined with the Deep Lake Oracle, the above scenario provides a trust-minimized process for enabling markets for many different Ordinal protocols.

### Potential use cases

- Ordinal Marketplaces for many Ordinal protocols
- In-game trading for games using the [Ordinal Gaming protocol](https://docs.ord.games/)
- trust-minimized p2p Ordinal swaps

## Considerations

> REQUIRED STATEMENT: Include the following statement to introduce this section:


> Are there any lessons learned from running this that would be helpful for new customers?  What went wrong when building it out?  What went right?
> How do I need to think about managing, maintaining, and monitoring this long term?
> REQUIREMENTS:
> You must include the "Cost optimization" section.
> You must include at least two of the other H3 sub-sections/pillars: Reliability, Security, Operational excellence, and Performance efficiency.

### Reliability

### Security

> REQUIRED STATEMENT: If using this section, include the following statement to introduce the section:
### Cost optimization

> REQUIRED: This section is required.
> REQUIRED STATEMENT: Include the following statement to introduce the section:

Cost optimization is about looking at ways to reduce unnecessary expenses and improve operational efficiencies. For more information, see [Overview of the cost optimization pillar].

> How much will this cost to run? See if you can answer this without dollar amounts.
> Are there ways I could save cost?
> If it scales linearly, than we should break it down by cost/unit. If it does not, why?
> What are the components that make up the cost?
> How does scale affect the cost?
> Link to the pricing calculator (<https://azure.microsoft.com/pricing/calculator>) with all of the components in the architecture included.
> If it makes sense, include small/medium/large configurations. Describe what needs to be changed as you move to larger sizes.

### Operational excellence

> REQUIRED STATEMENT: If using this section, include the following statement to introduce the section:

Operational excellence covers the operations processes that deploy an application and keep it running in production. For more information, see [Overview of the operational excellence pillar].

> This includes DevOps, monitoring, and diagnostics considerations.
> How do I need to think about operating this solution?

### Performance efficiency

> REQUIRED STATEMENT: If using this section, include the following statement to introduce the section:

Performance efficiency is the ability of your workload to scale to meet the demands placed on it by users in an efficient manner. For more information, see [Performance efficiency pillar overview].

> This includes scalability considerations.
> Are there any key performance considerations (past the typical)?
> Are there any size considerations around this specific solution? What scale does this work at? At what point do things break or not make sense for this architecture?

## Deploy this scenario

> (Optional, but greatly encouraged)
> Is there an example deployment that can show me this in action?  What would I need to change to run this in production?

## Contributors

## Next steps

## Related resources
