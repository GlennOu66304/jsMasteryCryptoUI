import { useContext } from 'react'
import './App.css'
import { TransactionsContext, handleChange } from './context/Transactions';
// import Form from './components/Form'



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

  const { connectWallet, currentAccount } = useContext(TransactionsContext)

  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      // onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  )

  return (
    <div className='main-app'>

      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        {/* based on the metamask wallet connect to change the button type */}
        {currentAccount ? null : connectWalletButton()}
      </div>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => { }} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => { }} />
        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => { }} />
        <Input placeholder="Enter Message" name="message" type="text" handleChange={() => { }} />
      </div>

    </div>
  )
}



export default App;
