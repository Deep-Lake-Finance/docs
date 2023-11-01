# Deep Lake Flow APIs

The Flow apis represent a new approach to Bitcoin DeFi development.  In this new approach we attempt to tackle __DeFi__ problems instead of __Bitcoin development__ problems.  For example, as of this writing, we have provided Flow APIs for Ordinal Lending and Ordinal Staking.  Future Flows include (potentially) Ordinal Market, Bitcoin Lending, Bitcoin Locking (see our existing easy button), Ordinal Trading, and much more.

So what is a "flow"?  A flow is a high level abstraction for a multi-user interaction around Bitcoin transactions.

For example, with ordinal lending, you might normally expect to have a borrower and a lender. And we can define their interaction into two conceptual areas:

1. the loan data ( collateral,amount,interest, duration, etc )
2. the loan progress ( offered,active,repaid,liquidated, etc )

These two, together, identify a Flow!

Note that we havent talked about DLCs, PSBTs, Taproot.  Flows abstract the need to track these Bitcoin primitives for app developers.  Users will still need to sign PSBT messages, but the developer focuses on the FLOW. 

Lets get started: [[docs/Flow API/ordinal-lending| Ordinal Lending ]]
