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

  const { connectWallet, currentAccount, sendTransaction } = useContext(TransactionsContext)

  const Form = () => {
    const [addressTo, setAddressTo] = useState('')
    const [amount, setAmount] = useState(0)
    const [message, setMessage] = useState('')
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (event) => {

      const formData = {
        addressTo,
        amount,
        keyword,
        message
      }
      event.preventDefault();
      // console.log(formData)

      if (!addressTo || !amount || !message || !keyword) return;

      sendTransaction(formData)
    }
    return (
      <div>
        <form onSubmit={handleSubmit} >
          {/* AddressTo */}
          <div className="form-group">
            <label htmlFor="AddressToImput" className='form-label inline-block mb-2 text-gray-700'>AddressTo</label>
            <input type="text" name="AddressTo" value={addressTo} onChange={e => setAddressTo(e.target.value)} className="form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="AddressToImput" placeholder="AddressTo" />
          </div>
          {/* Amount */}
          <div className="form-group">
            <label htmlFor="amountlImput" className='form-label inline-block mb-2 text-gray-700'>Amount</label>
            <input name="amount" type="text" value={amount} onChange={e => setAmount(e.target.value)} className="form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="amountImput" placeholder="amount" />
          </div>
          {/* Keyword */}
          <div className="form-group">
            <label htmlFor="keywordImput" className='form-label inline-block mb-2 text-gray-700'>Keyword</label>
            <input type="text" name="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} className="form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="keywordImput" placeholder="Keyword" />
          </div>
          {/* Message */}
          <div className="form-group">
            <label htmlFor="messageImput" className='form-label inline-block mb-2 text-gray-700'>Message</label>
            <input name="message" type="text" value={message} onChange={e => setMessage(e.target.value)} className="form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="messageImput" placeholder="Message" />
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
