"use server";
import React from "react";
import { writeFileSync } from "fs";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { createPublicClient, http } from "viem";
import { sepolia, baseSepolia } from "viem/chains";

//Objective: create multiple users to feed to maci

export default async function login() {
  "use server";
  const publicClient = createPublicClient({
    transport: http(
      "https://base-sepolia.g.alchemy.com/v2/Uhzh7zEy_e4XwaeUrsxo1vvtTI4FsqXB"
    ),
    chain: baseSepolia,
  });
  //generate a private key
  const privateKey =
    process.env.PRIVATE_KEY ??
    (() => {
      const pk = generatePrivateKey();
      //   console.log(pk);
      writeFileSync(".env", `PRIVATE_KEY=${pk}`);
      return pk;
    })();

  const signer = privateKeyToAccount(privateKey);

  //creates a Safe Account from signer

  const safeAccount = await signerToSafeSmartAccount(publicClient, {
    entryPoint: ENTRYPOINT_ADDRESS_V06,
    signer: signer,
    saltNonce: 0n, // optional
    safeVersion: "1.4.1",
    // address: "0x...", // optional, only if you are using an already created account
  });

  // const web3authProvider = await web3auth.connect();
  // //Create the smart account signer from the provider and signer address {The account that will be interacting with contracts on this accounts behalf}
  // // try {
  // // } catch (e) {
  // //   console.log(e.stack);
  // // }
  // const smartAccountSigner = await providerToSmartAccountSigner(
  //   web3authProvider
  // ).then(console.log);

  // //Add a signer to the web3 auth account that was just created
  // const smartAccount = await signerToSafeSmartAccount(publicClient, {
  //   signer: smartAccountSigner,
  //   safeVersion: "1.4.1",
  //   entryPoint: ENTRYPOINT_ADDRESS_V06,
  // }).then(console.log);
  // setProvider(web3authProvider);
  // if (web3auth.connected) {
  //   console.log("here");
  //   setLoggedIn(true);
  //   const userInfo = await getUserInfo();
  //   console.log(userInfo);
  // } else {
  //   console.log("Not connected :(");
  // }
}
