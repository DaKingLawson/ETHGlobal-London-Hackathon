"use client";

import Image from "next/image";
import "dotenv/config";
import { React, useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Resize, scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import LoginCard from "@/components/LoginCard";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import Web3 from "web3";
import {
  providerToSmartAccountSigner,
  ENTRYPOINT_ADDRESS_V06,
} from "permissionless";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import { EIP1193Provider, createPublicClient, http } from "viem";
import { sepolia, baseSepolia } from "viem/chains";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import {
  privateKeyToSimpleSmartAccount,
  privateKeyToSafeSmartAccount,
} from "permissionless/accounts";
import login from "@/utils/login";

const clientId =
  "BLZgeDsQhrFbZSYgXRVmB-5R1PzjXJBeZ8hXftrqnlgW5XRYLMxNYiMUzRp3l1dDxwa0w7iAwSII_wTrWEJs4uU"; // get from https://dashboard.web3auth.io

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x14A34", // hex of 84532
  rpcTarget:
    "https://base-sepolia.g.alchemy.com/v2/Uhzh7zEy_e4XwaeUrsxo1vvtTI4FsqXB",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Base Sepolia",
  blockExplorerUrl: "https://sepolia-explorer.base.org",
  ticker: "ETH",
  tickerName: "ETH",
  logo: "https://github.com/base-org/brand-kit/blob/main/logo/symbol/Base_Symbol_Blue.svg",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider: privateKeyProvider,
});

// Create the smart account signer from the provider and signer address

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(checkUser());
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // const init = async () => {
    //   try {
    //     await web3auth.initModal();
    //     setProvider(web3auth.provider);
    //     if (web3auth.connected) {
    //       setLoggedIn(true);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // init();
    // login();z
  }, []);

  const handleClick = () => {
    // const loginRes = await login().then(console);
    console.log("yo");
    const safeAccount = login();
  };

  const getUserInfo = async () => {
    const user = await web3auth.getUserInfo();
    uiConsole(user);
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
    uiConsole("logged out");
  };

  const getAccounts = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const address = await web3.eth.getAccounts();
    uiConsole(address);
  };

  const getBalance = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const address = (await web3.eth.getAccounts())[0];

    // Get user's balance in ether
    const balance = web3.utils.fromWei(
      await web3.eth.getBalance(address), // Balance is in wei
      "ether"
    );
    uiConsole(balance);
  };

  const signMessage = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await web3.eth.personal.sign(
      originalMessage,
      fromAddress,
      "test password!" // configure your own password here.
    );
    uiConsole(signedMessage);
  };

  function uiConsole(...args) {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
    console.log(...args);
  }

  const description =
    "Imagine a world where communities come together effortlessly to support their own.";

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dosguo3sg",
    },
  });
  const myImage = cld.image("hackathon/cnz5nwtobk1xfebzd3ko");

  const loggedOutView = (
    <div className="flex flex-row h-screen bg-eggshell">
      <div className="flex min-w-[50%]">
        <AdvancedImage
          cldImg={myImage}
          alt="Your Image Description"
          className="w-full h-full object-cover"
        />
      </div>

      <LoginCard
        heading="Hey, Neighbor!"
        description={description}
        handleClick={handleClick}
        login={login}
      />
    </div>
  );

  const loggedInView = (
    <div className="bg-eggshell">
      <butto onClick={logout}>Logout</butto>
    </div>
  );

  return loggedIn ? loggedInView : loggedOutView;
}

export function checkUser() {
  console.log(web3auth.connected);
  return web3auth.connected;
}
