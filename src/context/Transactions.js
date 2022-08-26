import { createContext, useEffect, useState } from 'react'

// contract
import contract from '../contracts/Transactions.json'
import { ethers } from 'ethers';

const contractAddress = "0xc5d404183cb9De6a14eccb849f44A862a43c2C05"
const abi = contract.abi

export const TransactionsContext = createContext()

const getEthereumContract = () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum, "any")
    // it is signer not singer
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, abi, signer)

    console.log({ provider, signer, transactionContract })
}
export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);
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
            if (account.length) {
                setCurrentAccount(account)
            } else {
                console.log("no account found!")
            }

        } catch (error) {
            console.log(error)
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
        }
    }
    useEffect(() => {
        checkWalletIsConnected();
    }, [])


    return (
        <TransactionsContext.Provider value={{ connectWallet, currentAccount }} >
            {children}
        </TransactionsContext.Provider>
    )
}