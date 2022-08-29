import { createContext, useEffect, useState } from 'react'

// contract
import contract from '../contracts/Transactions.json'
import { ethers } from 'ethers';

// const contractAddress = "0xc5d404183cb9De6a14eccb849f44A862a43c2C05" ropstern   
//  local deploy
const contractAddress = "0xcae5B5CAC5849F0Dbc7AB21F0B7A9052A0f89C1C"
const abi = contract.abi

export const TransactionsContext = createContext()

const getEthereumContract = () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    // it is signer not singer
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, abi, signer)

    console.log({ provider, signer, transactionContract })
    return transactionContract
}
export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    // const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" })
    const checkWalletIsConnected = async () => {
        // 1.check if there is metamask
        const { ethereum } = window;
        if (!ethereum) {
            alert("Please install Meta mask!")
        }
        try {
            const account = await ethereum.request({
                method: 'eth_accounts',
            })
            console.log(account[0])
            if (account.length) {
                setCurrentAccount(account[0])
                getAllTransactions()
            } else {
                console.log("no account found!")
            }

        } catch (error) {
            console.log(error)
            throw new Error("no ethereum Object")
        }



    }

    const connectWallet = async () => {
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
            console.log("find the address" + " " + account[0])
            setCurrentAccount(account)
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum Object")
        }
    }

    // const handleChange = (e, name) => {
    //     setFormData((preState) => ({
    //         ...preState, [name]: e.target.value
    //     }))



    // }
    const checkTransactionsExit = async () => {
        try {
            const transactionContract = getEthereumContract()
            const transactionCount = await transactionContract.getTransactionsCount()
            window.localStorage.setItem("transactionCount", transactionCount)

        } catch (error) {
            console.log(error)
        }

    }
    const sendTransaction = async (formData) => {
        const { ethereum } = window
        try {
            if (!ethereum) {
                alert("Please install Meta mask!")
            }

            const transactionContract = getEthereumContract()
            const { addressTo, amount, keyword, message } = formData
            console.log(formData)

            const parsedAmount = ethers.utils.parseEther(amount)
            await ethereum.request(
                {
                    method: "eth_sendTransaction",
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex,
                    }]

                }
            )
            const transactionHash = await transactionContract.addToBlock(addressTo, amount, message, keyword)
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`success - ${transactionHash.hash}`)
            const transactionCount = await transactionContract.getTransactionsCount()
            setTransactionCount(transactionCount.toNumber())
        } catch (error) {
            console.log(error)
            throw new Error("no ethereum Object")

        }



    }

    const getAllTransactions = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert("Please install Meta mask!")
        }

        try {
            const transactionContract = getEthereumContract()
            const avaliableTransactions = await transactionContract.getAllTransactions()
            const structuredTransactions = avaliableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) * (10 ** 0)


            }))

            console.log(structuredTransactions)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        checkWalletIsConnected();
        checkTransactionsExit();
    }, [])


    return (
        <TransactionsContext.Provider value={{ connectWallet, currentAccount, sendTransaction }} >
            {children}
        </TransactionsContext.Provider>
    )
}