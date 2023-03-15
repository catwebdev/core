const Factory = artifacts.require('DreamswapV2Factory');

module.exports = async function (deployer, _network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
    const factory = await Factory.deployed();
};