---
description: Native Bitcoin Liquidity Locking in 10 Minutes
---

# Bitcoin Liquidity

## Infrastructure <a href="#infrastructure" id="infrastructure"></a>

Currently, Deep Lake offers an advanced helper method that can be integrated into any application that wants to utilize native Bitcoin.The key roles involved in the implementation are:

* User: The holder of the Bitcoin. Users can ensure their Bitcoin is in their custody.
* Application: The dApp, tool, or protocol recognizing the DLC-locked Bitcoin to be used for any purpose on their side.
* Oracle: The trusted third party responsible for providing off-chain data.

#### Implementation <a href="#implementation" id="implementation"></a>

Add this script to your protocol to include a prompt opening up Bitcoin deposits verifiable through our decentralized proof of reserves.

`!(function (d, l, f) {(a = d.getElementsByTagName("head")[0]),(b = d.createElement("link")).setAttribute("rel", "stylesheet"),b.setAttribute("type", "text/css"),b.setAttribute("href", f),a.appendChild(b),((r = d.createElement("script")).async = 1),(r.src = l),a.appendChild(r),(c = d.getElementsByTagName("body")[0]).setAttribute("pkey","dlf9lbtcl002008mbouo4nzm3");})(window.document,"https://helper.deeplake.finance/static/js/dl.js","https://helper.deeplake.finance/static/css/dl.css");`

The Deep Lake Escrow Helper Method can be set up in the following way:

1.Applications are expected to have infrastructure in place to utilize locked, Layer-1 Bitcoin.  Reach out if you need help with this!

2.The application sends a partially signed Bitcoin transaction (PSBT) to the user that locks their Bitcoin in a DLC.

3.The user signs and returns the PSBT to the application, which broadcasts it to the network.

4.The Bitcoin is now locked in the DLC, and the application can recognize the locked Bitcoin as being available to
