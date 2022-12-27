import { DeployFunction } from "hardhat-deploy/types";
import { PriceFeedTimelock__factory, TokenManager__factory } from "../../types";
import { Ship } from "../../utils";
import { signers as configSigners, orderKeepers as configOrderKeepers } from "../../config/accounts";

const func: DeployFunction = async (hre) => {
  const { deploy, connect, accounts } = await Ship.init(hre);

  const { deployer, signer1, signer2, orderKeeper1, orderKeeper2 } = accounts;
  const buffer = 24 * 60 * 60;
  let signers: string[];
  let keepers: string[];

  if (hre.network.tags.prod) {
    signers = configSigners;
    keepers = configOrderKeepers;
  } else {
    signers = [signer1.address, signer2.address];
    keepers = [orderKeeper1.address, orderKeeper2.address];
  }

  const tokenManager = await connect(TokenManager__factory);

  const priceFeedTimelock = await deploy(PriceFeedTimelock__factory, {
    args: [deployer.address, buffer, tokenManager.address],
  });

  if (priceFeedTimelock.newlyDeployed) {
    for (const signer of signers) {
      const tx = await priceFeedTimelock.contract.setContractHandler(signer, true);
      console.log("Set ", signer, " to signer of priceFeedTimelock at ", tx.hash);
      await tx.wait();
    }

    for (const keeper of keepers) {
      const tx = await priceFeedTimelock.contract.setKeeper(keeper, true);
      console.log("Set ", keeper, " to keeper of priceFeedTimelock at ", tx.hash);
      await tx.wait();
    }
  }
};

export default func;
func.tags = ["priceFeedTimelock"];
func.dependencies = ["tokenManager"];
