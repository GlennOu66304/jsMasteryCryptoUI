import { useEffect, useState, useContext } from 'react'
// contract
import './App.css'
import { TransactionsContext } from './context/Transactions';

// const { ethers } = require('ethers');
// contract address
// const contractAddress = "0xc5d404183cb9De6a14eccb849f44A862a43c2C05"
// abi
// const abi = contract.abi
function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const checkWalletIsConnected = async () => {
    // 1.check if there is metamask
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install Meta mask!")
    }

    // 2.chekc if get the account 
    try {

      // 3.yes, then setState the account
      const account = await ethereum.request({
        method: 'eth_requestAccounts',
        // params: [{ eth_accounts: {} }]
      })
      // https://ethereum.stackexchange.com/questions/75851/metamask-rpc-error-internal-json-rpc-error, simply clean the history and cache
      console.log("find the address" + account[0])
      setCurrentAccount(account)
    } catch (error) {
      console.log(error)
    }
  }

  const connectWalletHandler = () => { }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;
      // How to Mint an NFT from Code
      // https://docs.alchemy.com/docs/how-to-mint-an-nft-from-code
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any")
        // it is signer not singer
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer)
        console.log("initialize payment")
        // start mint
        let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
        // during mint
        console.log("Mining... Please wait")
        // mint success
        await nftTxn.wait()
        console.log(`Mined,see transaction:https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)

      }
      else {
        console.log("ethereum objext does not exit")
      }

      // mint failed
    }
    catch (err) {
      console.log(err)
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  // useEffect(() => {
  //   checkWalletIsConnected();
  // }, [])

  const text = useContext(TransactionsContext)
  console.log(text)
  return (
    <div className='main-app'>

      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        {/* based on the metamask wallet connect to change the button type */}
        {/* {currentAccount ? mintNftButton() : connectWalletButton()} */}
        {connectWalletButton()}
      </div>
    </div>
  )
}



export default App;
