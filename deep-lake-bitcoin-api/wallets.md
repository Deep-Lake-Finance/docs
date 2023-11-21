---
description: Deep Lake APIs support a variety of wallets.
---

# Wallets

Deep Lake APIs currently support the following wallets:

* Leather Wallet \[https://leather.io]\(https://leather.io)
* XVerse Wallet \[https://xverse.app/]\(https://xverse.app/)
* Unisat Wallet \[https://unisat.io]\(https://unisat.io)

Keep in mind that each wallet API handles PSBTs and Transactions differently.  Some require Base64 data, some require Hex data.  Some may use either.

Deep Lake's APIs provide the Base64 and Hex values of transactions for signing, but you will need to send the correct data to the wallet that the user is using.
