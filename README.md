# Hardhat practice

This repository is used to practice using hardhat to construct projects. In case you have any suggestions, don't hesitate to file a PR.
The practice source is the [paradigm 2021 ctf](https://github.com/paradigmxyz/paradigm-ctf-2021).

## Setup
Initialize project with `yarn` to install the package.
And set the node you want to fork from into the environment `$RPC_URL`.
```shell
# ethereum mainnet
export RPC_URL=https://mainnet.infura.io/v3/{your-inufra-api-key}
```

## Command
```shell
# fork mainnet
yarn fork

# compile contract
yarn compile

# test single file with local network, plz run `yarn fork` first
yarn test test/{file}
```

## Not work for now
- [ ] hardhat-storage-layout
