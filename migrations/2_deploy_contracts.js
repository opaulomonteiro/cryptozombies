const SafeMath = artifacts.require("SafeMath");
const ZombieAttack = artifacts.require("ZombieAttack");
const ZombieFactory = artifacts.require("ZombieFactory");
const ZombieFeeding = artifacts.require("ZombieFeeding");
const ZombieHelper = artifacts.require("ZombieHelper");
const ZombieOwnership = artifacts.require("ZombieOwnership");

module.exports = async function(deployer) {
  await deployer.deploy(SafeMath);
  await deployer.deploy(ZombieAttack);
  await deployer.deploy(ZombieFactory);
  await deployer.deploy(ZombieFeeding);
  await deployer.deploy(ZombieHelper);
  await deployer.deploy(ZombieOwnership);
};
