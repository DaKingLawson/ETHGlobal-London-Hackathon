// import { Web3Auth } from "@web3auth/modal";
// import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
// import { Web3AuthNoModal } from "@web3auth/no-modal";
// import {
//   WALLET_ADAPTERS,
//   CHAIN_NAMESPACES,
//   IProvider,
//   WEB3AUTH_NETWORK,
//   UX_MODE,
// } from "@web3auth/base";
// // import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
// import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

// export const init = async () => {
//   try {
//     const chainConfig = {
//       chainNamespace: CHAIN_NAMESPACES.EIP155,
//       chainId: "0x1", // Please use 0x1 for Mainnet
//       rpcTarget: "https://rpc.ankr.com/eth",
//       displayName: "Ethereum Mainnet",
//       blockExplorerUrl: "https://etherscan.io/",
//       ticker: "ETH",
//       tickerName: "Ethereum",
//       logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//     };

//     const privateKeyProvider = new EthereumPrivateKeyProvider({
//       config: { chainConfig },
//     });

//     const web3auth = new Web3AuthNoModal({
//       clientId,
//       web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
//       privateKeyProvider,
//     });

//     const openloginAdapter = new OpenloginAdapter({
//       loginSettings: {
//         mfaLevel: "optional",
//       },
//       adapterSettings: {
//         uxMode: UX_MODE.REDIRECT,
//         whiteLabel: {
//           appName: "W3A Heroes",
//           appUrl: "https://web3auth.io",
//           logoLight: "https://web3auth.io/images/web3authlog.png",
//           logoDark: "https://web3auth.io/images/web3authlogodark.png",
//           defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
//           mode: "dark", // whether to enable dark mode. defaultValue: auto
//           theme: {
//             primary: "#00D1B2",
//           },
//         },
//         mfaSettings: {
//           deviceShareFactor: {
//             enable: true,
//             priority: 1,
//             mandatory: true,
//           },
//           backUpShareFactor: {
//             enable: true,
//             priority: 2,
//             mandatory: false,
//           },
//           socialBackupFactor: {
//             enable: true,
//             priority: 3,
//             mandatory: false,
//           },
//           passwordFactor: {
//             enable: true,
//             priority: 4,
//             mandatory: false,
//           },
//         },
//         loginConfig: {
//           google: {
//             verifier: "w3a-google-demo",
//             typeOfLogin: "google",
//             clientId:
//               "519228911939-cri01h55lsjbsia1k7ll6qpalrus75ps.apps.googleusercontent.com", //use your app client id you got from google
//           },
//         },
//       },
//     });
//     web3auth.configureAdapter(openloginAdapter);
//     setWeb3auth(web3auth);

//     await web3auth.init();
//     setProvider(web3auth.provider);

//     if (web3auth.connected) {
//       setLoggedIn(true);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const clientId =
//   "BNCFAdg6LMaZzkwLBCrabZXrQVaiLV8Gc9ogb97_XgM4cus3PEgJR-0qF4k1o24q49fP6LMDagy7-617YG2kpKA";
// // get it from https://dashboard.web3auth.io by creating a Plug n Play project.

// const chainConfig = {
//   chainNamespace: "eip155",
//   chainId: "0x1",
//   rpcTarget: "https://rpc.ankr.com/eth",
//   displayName: "Ethereum Mainnet",
//   blockExplorerUrl: "https://etherscan.io",
//   ticker: "ETH",
//   tickerName: "Ethereum",
//   logo: "https://images.toruswallet.io/ethereum.svg",
// };

// const privateKeyProvider = new EthereumPrivateKeyProvider({
//   config: { chainConfig },
// });

// const web3auth = new Web3Auth({
//   clientId,
//   web3AuthNetwork: "sapphire_mainnet",
//   privateKeyProvider: privateKeyProvider,
// });

// const openloginAdapter = new OpenloginAdapter({
//   adapterSettings: {
//     uxMode: "popup",
//     loginConfig: {
//       // Google login
//       google: {
//         verifier: "w3a-google-demo", // Pass the Verifier name here
//         typeOfLogin: "google", // Pass on the login provider of the verifier you've created
//         clientId:
//           "519228911939-cri01h55lsjbsia1k7ll6qpalrus75ps.apps.googleusercontent.com", // Pass on the Google `Client ID` here
//       },
//     },
//   },
// });

// web3auth.configureAdapter(openloginAdapter);

// // Initialize Modal
// await web3auth.initModal();

// // Login with Google
// await web3auth.connect();
