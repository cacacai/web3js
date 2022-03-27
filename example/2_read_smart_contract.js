const Web3 = require('web3')
const rpcURL = 'https://goerli.infura.io/v3/5d368be9da12461ba679dd39ba212f33' // Your RCP URL goes here
const web3 = new Web3(rpcURL)

//合约的ABI内容
const abi = [ { "inputs": [ { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "increment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reset", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_initialNumber", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getNumber", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "number", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
//合约部署到测试网络中的地址，使用了remix来进行部署
const address = '0xCCB1e0a0895C34e87f6Cd2A9F78B53c809F2E623'
//获取到合约的实例
//https://goerli.etherscan.io/address/0xCCB1e0a0895C34e87f6Cd2A9F78B53c809F2E623
const contract = new web3.eth.Contract(abi, address)

//调用合约中的方法
contract.methods.getNumber().call((err, result) => { console.log(result) })