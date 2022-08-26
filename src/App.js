import { useContext, useState } from 'react'
import './App.css'
import { TransactionsContext } from './context/Transactions';
// import Welcome from './components/Welcome'



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

  const Form = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name, email)
    }
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="nameImput" className='form-label inline-block mb-2 text-gray-700'>Name</label>
            <input type="text" name="name" value={name} onChange={(e) => {
              setName(e.target.value)
            }} className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nameImput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="emailImput" className='form-label inline-block mb-2 text-gray-700'>Email</label>
            <input name="email" type="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="emailImput" placeholder="email@domain.com" />
          </div>
          <input type="submit" value="Submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
        </form>
      </div>
    )
  }


  return (
    <div className='min-h-screen'>
      <h1>Send ETH To Your Friend!</h1>

      <div >
        {/* based on the metamask wallet connect to change the button type */}
        {currentAccount ? null : connectWalletButton()}
      </div>
      <Form />


    </div>
  )
}



export default App;
