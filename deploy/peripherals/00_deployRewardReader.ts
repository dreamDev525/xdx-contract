import { DeployFunction } from "hardhat-deploy/types";
import { RewardReader__factory } from "../../types";
import { Ship } from "../../utils";

const func: DeployFunction = async (hre) => {
  const { deploy } = await Ship.init(hre);

  await deploy(RewardReader__factory);
};

export default func;
func.tags = ["rewardReader"];
