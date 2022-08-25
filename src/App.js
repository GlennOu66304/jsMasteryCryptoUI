import { useEffect, useState } from 'react'
// contract
import contract from './contracts/NFTCollectible.json'
import './App.css'
// contract address
const contractAddress = "0xc5d404183cb9De6a14eccb849f44A862a43c2C05"
// abi
const abt = contract.abi
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

  const mintNftHandler = () => { }

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

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        {/* based on the metamask wallet connect to change the button type */}
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
    </div>
  )
}



export default App;
