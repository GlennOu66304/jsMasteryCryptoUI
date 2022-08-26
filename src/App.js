import { useContext } from 'react'

import './App.css'
import { TransactionsContext } from './context/Transactions';


function App() {

  // const mintNftHandler = async () => {
  //   try {
  //     const { ethereum } = window;
  //     // How to Mint an NFT from Code
  //     // https://docs.alchemy.com/docs/how-to-mint-an-nft-from-code
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum, "any")
  //       // it is signer not singer
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(contractAddress, abi, signer)
  //       console.log("initialize payment")
  //       // start mint
  //       let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
  //       // during mint
  //       console.log("Mining... Please wait")
  //       // mint success
  //       await nftTxn.wait()
  //       console.log(`Mined,see transaction:https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)

  //     }
  //     else {
  //       console.log("ethereum objext does not exit")
  //     }

  //     // mint failed
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWallet} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  // const mintNftButton = () => {
  //   return (
  //     <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
  //       Mint NFT
  //     </button>
  //   )
  // }


  const { connectWallet, currentAccount } = useContext(TransactionsContext)

  return (
    <div className='main-app'>

      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        {/* based on the metamask wallet connect to change the button type */}
        {currentAccount ? null : connectWalletButton()}

      </div>
    </div>
  )
}



export default App;
