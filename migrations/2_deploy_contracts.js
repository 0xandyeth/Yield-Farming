// const MerlinToken = artifacts.require("MerlinToken");
// const MasterChef = artifacts.require("MasterChef");
// const Timelock = artifacts.require("Timelock");
// const Multicall = artifacts.require("./libs/Multicall");

// module.exports = function(deployer) {
//     deployer.deploy(MasterChef,{_devaddr:'0xb550824817ee42E5F73111d9786316A7a3305908',_feeAddress:'0x4eff6dFBe2498d1DDaA5ECb528E6C76cbb99BE08',_vikingPerBlock:1000000000000000000,_startBlock:5045936});
//     deployer.deploy(MerlinToken);
//     deployer.deploy(Timelock,{admin_:'0xE4a99eda7387960bE6F9a4408c3BAa7BC5F5edff',delay_:86400});
//     deployer.deploy(Multicall);
   
// };


// const { artifacts } = require("hardhat");

const MasterChef = artifacts.require('./MasterChef.sol');
const MerlinToken = artifacts.require('./MerlinToken.sol');
const Timelock = artifacts.require('./Timelock.sol');
const Multicall = artifacts.require('./Multicall.sol')

module.exports = function(deployer) {
  return deployer.then(() => {
    return deployContracts(deployer)
  })
}

async function deployContracts(deployer) {
  let multiCall =await deployer.deploy(Multicall);
 // let merlinToken = await deployer.deploy(MerlinToken);
 // let timeLock = await deployer.deploy(Timelock, '0x4eff6dFBe2498d1DDaA5ECb528E6C76cbb99BE08', 86400);
 // let masterChef = await deployer.deploy(MasterChef, '0xb550824817ee42E5F73111d9786316A7a3305908', '0x4eff6dFBe2498d1DDaA5ECb528E6C76cbb99BE08','0x4eff6dFBe2498d1DDaA5ECb528E6C76cbb99BE08', 1, 5160968);
}

// let timeLock = await deployer.deploy(Timelock, '0xD77450974E5F620b47295D99437278D20d28C050', 86400);
// let masterChef = await deployer.deploy(MasterChef, '0x3037e84a22e8C008391a6029517896518Dc026D2', '0xD77450974E5F620b47295D99437278D20d28C050', '0xD77450974E5F620b47295D99437278D20d28C050', 1, 5160968);