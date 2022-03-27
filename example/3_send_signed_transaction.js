//代码也可以参考 https://learnblockchain.cn/docs/web3.js/web3-eth.html#sendsignedtransaction

//需要指定引入Transaction 模块
const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://goerli.infura.io/v3/5d368be9da12461ba679dd39ba212f33')

const account1 = '0x172a6c2f64700165fAF202f269d3Ad873D0c7E4b' // Your account address 1
const account2 = '0x427E5D0A21e129883527DCCaeA8d1327d153884b' // Your account address 2

const privateKey1 = Buffer.from('','hex')




web3.eth.getTransactionCount(account1,(err,txCount) =>{
    //构建转账信息
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.0001', 'ether')),
        gasLimit: web3.utils.toHex(201000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('2.5', 'gwei'))
    }

    //对交易进行签名,发起转账一方进行签名
    /**
     * 
     * 需要通过{ chain: 'goerli' } 方式指定交易的网络id，否则会存在以下报错信息
     * Returned error: invalid sender
     * 
     * 默认使用的是miannet主网
     */
    const tx = new Tx(txObject, { chain: 'goerli' })
    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    
    const raw = '0x' + serializedTx.toString('hex')
    console.log(raw)


    //发送已签名的交易,对交易进行广播
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        //成功交易之后返回交易的hansh值
        console.log('txHash:', txHash)
        console.log(err)
      })
})

/**
 * Returned error: insufficient funds for gas * price + value 
 * 可能是因为地址的账户中余额不足，还有选择错误的的测试网络或者生产网络，对应的账户没有钱
 * 
 * 
 * Returned error: invalid sender
 * 
 */