import 'hardhat-tracer';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-storage-layout';
import '@nomicfoundation/hardhat-chai-matchers';

import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
    ],
    overrides: {
      // example
      // 'contracts/handlers/maker/dapphub/DSAuth.sol': {
      //   version: '0.6.12',
      // },
    },
  },
  networks: {
    hardhat: {
      chainId: 1, // hardhat sets 31337 as chainId rather than a forked chainId, so we set here.
      accounts: {
        mnemonic:
          "dice shove sheriff police boss indoor hospital vivid tenant method game matter",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
      },
      initialBaseFeePerGas: 0,
    },
  },
};

export default config;
