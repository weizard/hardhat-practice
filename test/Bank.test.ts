import { Setup } from 'typechain-types/bank/Setup.sol';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { parseEther } from 'ethers/lib/utils';

const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  DEPLOYER = '0x7D8A8956e09c4459A18Eeb210fCD111FE94C1360',
  SOLVER = '0x1b57b3A1d5b4aa8E218F54FafB00975699463e6e';

describe('bank', async () => {
  let setup: Setup;

  before(async () => {
    setup = (await (await ethers.getContractFactory('contracts/bank/Setup.sol:Setup')).deploy()) as Setup;
  });

  it('solve secure', async () => {
    const isSolved = await setup.isSolved();

    expect(isSolved).to.be.true;
  });
});
