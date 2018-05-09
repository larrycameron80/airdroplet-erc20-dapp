# Airdroplet ERC20 Ðapp (Decentralised Application) 

![alt text](https://github.com/samgos/airdroplet-erc20-dapp/blob/master/img.png)

## Installation

* Unpack the .zip file

* Install MetaMask to your web browser and log into your account that has a succifent ERC20 + ETH balances present for use

* Go the directory of the unpacked file in a console or terminal `cd airdroplet-erc20-dapp-master`

* Install NPM https://www.npmjs.com/get-npm

* Install truffle `npm install -g truffle`

* Install dependencies `npm install`

* Compile local contracts `truffle compile`

* Deploy local contracts `truffle develop`

* Migrate local contracts `migrate` 

* Create a new console tab in the same directory `CRTL + T or CMD + T`

* Launch webpack to localhost `npm run dev`

* Interact with the dapp at http://localhost:8080/ on the main Ethereum Network via MetaMask in your browser and deliver airdrops with a breeze 

#### NOTE: Only have 2.5k recipents max per file, otherwise errors will arise. Keep track of your balances with MetaMask and in order to initialise the dapp you've to approve 1 inital TX for ERC20 transferFrom() approval then a following tx for every batch sent
