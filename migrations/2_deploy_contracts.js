var Airdroplet = artifacts.require("./Airdroplet.sol");
var Token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(Token);
  deployer.deploy(Airdroplet);

};
