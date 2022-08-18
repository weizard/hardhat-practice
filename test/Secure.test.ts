import { Setup } from 'typechain-types/secure/Setup.sol';
import { WETH9 } from 'typechain-types';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { parseEther } from 'ethers/lib/utils';

const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  DEPLOYER = "0x7D8A8956e09c4459A18Eeb210fCD111FE94C1360",
  SOLVER = "0x1b57b3A1d5b4aa8E218F54FafB00975699463e6e";

describe("secure", async () => {
  let setup: Setup;
  let weth: WETH9;

  before(async () => {
    const signer = await ethers.getSigner(DEPLOYER);
    setup = (await (
      await ethers.getContractFactory(
        "contracts/secure/Setup.sol:Setup",
        signer
      )
    ).deploy({ value: parseEther("50") })) as Setup;
    weth = (await ethers.getContractAt(
      "contracts/secure/Setup.sol:WETH9",
      WETH
    )) as WETH9;
  });

  it("solve secure", async () => {
    const solver = await ethers.getSigner(SOLVER);

    await weth.connect(solver).deposit({
      value: parseEther("50"),
    });
    await weth.connect(solver).transfer(setup.address, parseEther("50"));
    const isSolved = await setup.isSolved();

    expect(isSolved).to.be.true;
  });
});
