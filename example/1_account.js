const Web3 = require('web3')
// 通过infura接口接入区块链网络
const rpcUrl = 'https://goerli.infura.io/v3/5d368be9da12461ba679dd39ba212f33'

/**
 * web3初始化和建立连接  参考
 * https://web3js.readthedocs.io/en/v1.7.1/web3.html#providers
 */

//创建链接实例
const web3 = new Web3(rpcUrl)
// or
// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


//修改网络
// change provider
web3.setProvider('wss://goerli.infura.io/ws/v3/5d368be9da12461ba679dd39ba212f33');

//直接获取本地的网络节点服务
//var net = require('net');
//var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
//var web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path

/**
 * http 不支持订阅 短链接
 * websockect 支持订阅 传统浏览器方式，
 * IPC 本地区块链节点连接  更安全
 */

//账户地址
const address = '0x172a6c2f64700165fAF202f269d3Ad873D0c7E4b'

console.log(web3.version)
//
web3.eth.getBalance(address, (err,wei) =>{
    balance = web3.utils.fromWei(wei,'ether')
    console.log(balance)
})
