import { createContext, useEffect, useState } from 'react'

// contract
import contract from '../contracts/Transactions.json'
import { ethers } from 'ethers';

const contractAddress = "0xc5d404183cb9De6a14eccb849f44A862a43c2C05"
const abi = contract.abi

export const TransactionsContext = createContext()
export const TransactionsProvider = ({ children }) => {
    return (
        <TransactionsContext.Provider value={{value:"test!"}} >
            {children}
        </TransactionsContext.Provider>
    )
}