import { Hello, Setup } from 'typechain-types/hello';
import { ethers, storageLayout } from 'hardhat';
import { expect } from 'chai';

describe("hello", async () => {
  let setup: Setup;
  let hello: Hello;

  before(async function () {
    setup = (await (
      await ethers.getContractFactory("contracts/hello/Setup.sol:Setup")
    ).deploy()) as Setup;
  });

  it("solve hello", async () => {
    const helloAddr = await setup.hello();
    hello = await ethers.getContractAt("Hello", helloAddr);
    await hello.solve();
    const isSolved = await setup.isSolved();

    expect(isSolved).to.be.true;
  });
});
