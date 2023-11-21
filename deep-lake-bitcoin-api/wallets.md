---
description: Deep Lake APIs support a variety of wallets.
---

# Wallets

At Deep Lake, we understand the importance of flexibility and compatibility in the world of digital finance. Our APIs are designed to work seamlessly with a range of wallets, each offering unique features and functionalities. Below is a detailed overview of the wallets currently supported by our Deep Lake APIs, along with some essential considerations regarding their integration:

1. **Leather Wallet**:
   * [Leather Wallet](https://leather.io) is among the supported wallets. It's known for its user-friendly interface and robust security features. Whether you're developing applications for individual users or enterprise solutions, Leather Wallet's API can cater to a wide range of requirements.
2. **Xverse Wallet**:
   * Another key player in our supported wallets lineup is [Xverse Wallet](https://xverse.app/). Xverse Wallet is tailored for those who seek a blend of simplicity and advanced features. It's particularly popular among users who appreciate a clean, intuitive design coupled with powerful functionality.
3. **Unisat Wallet**:
   * We also support [Unisat Wallet](https://unisat.io), a wallet known for its versatility and ease of use. Unisat Wallet is an excellent choice for developers looking to provide a straightforward and efficient user experience.

**Handling PSBTs and Transactions**:

When integrating these wallets with Deep Lake's APIs, it's crucial to understand how each wallet API handles Partially Signed Bitcoin Transactions (PSBTs) and regular transactions. The key variations you'll encounter are:

* **Base64 Data**: Some of the wallets in our ecosystem require transaction data in Base64 format. Our APIs are fully equipped to provide transactions in this format, ensuring compatibility and ease of integration.
* **Hex Data**: Other wallets may require transaction data in Hexadecimal (Hex) format. Again, Deep Lake's APIs are designed to provide this format, allowing you to cater to the preferences of these wallets.

The diversity in data format requirements underscores the need for developers to be aware of the specific requirements of the wallet being used by their end users. Deep Lake's APIs provide both Base64 and Hex values of transactions for signing purposes. It's up to you, as a developer, to ensure that the correct data format is sent to the wallet in use. This flexibility allows you to create a more tailored and efficient experience for your users, enhancing the overall functionality of your application.

In summary, our service's compatibility with a range of wallets, coupled with our versatile API capabilities, positions you to develop robust and user-friendly Bitcoin-related applications. Whether your users prefer Leather Wallet, Xverse Wallet, or Unisat Wallet, our APIs will integrate smoothly, ensuring a seamless transaction experience.
