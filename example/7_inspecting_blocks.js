const Web3 = require('web3')
const web3 = new Web3('https://goerli.infura.io/v3/5d368be9da12461ba679dd39ba212f33')
//const web3 = new Web3('https://mainnet.infura.io/v3/5d368be9da12461ba679dd39ba212f33')


// get latest block number 获取最高的区块编号
web3.eth.getBlockNumber().then(console.log)

// // get latest block 获取最高的区块所有信息
//web3.eth.getBlock('latest').then(console.log)

// get latest 10 blocks  获取最近的10个区块
/**
 * 但是会存在重复??? 不理解
 * 14469649
14469650
14469650
14469649
14469650
14469650
14469650
14469649
14469650
14469650
14469650
 */
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlockNumber().then(console.log)
    //web3.eth.getBlock(latest - i).then(console.log)
  }
})

// get transaction from specific block
/**
 * 根据区块哈希或区块号，是区块的hash值
 * 以及交易位置索引获取交易对象，为转账记录中的Others-Position 值
 */
//const hash = '0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073'
const hash = '0x79bd3fdd94a0fcb80f02aaa5171c885d09d2850cb5892638a270198b3c80a7af'

web3.eth.getTransactionFromBlock(hash, 0).then(console.log)