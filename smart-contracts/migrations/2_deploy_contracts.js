var Pie = artifacts.require('./Pie.sol')
let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Pie.sol
      console.log("Nothing deployed")
    } catch (error) {
      console.log(error)
    }
  })
}
