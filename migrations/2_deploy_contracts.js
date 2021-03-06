const Election = artifacts.require("Election");

module.exports = async function(deployer) {
  // Deploy Election contract
  await deployer.deploy(Election);
  const election = await Election.deployed();
};