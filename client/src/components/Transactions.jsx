import React,{useContext} from "react";
import {TransactionContext} from '../context/TransactionContext';
import useFetch from '../hooks/useFetch';
import { shortenAddress } from "../utils/shortenAddress";
const array=['https://www.shutterstock.com/image-illustration/3d-render-cute-childish-face-260nw-1046818417.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuOcWA6Ld2Zo8fD7uGm48apfMd4jcUDLJaWJ5kLU&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5l5WvU8W7zM4IVFcBc7MR_12YrOnDGRlYnJ7Hfuw&s',
'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
]

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    
    return (
      <div className="bg-[rgba(255, 255, 255, 0.05)] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl
      rounded-3xl
      backdrop-blur-sm
      border-solid
      border
      border-stone-200"
    >
      <div className="flex flex-col items-center w-full mt-3">
      <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p className="text-[#37c7da] font-bold">{Math.floor(1+Math.random() * 100)+' DAYS ago'}
        </p>
      </div>
      <div className="display-flex justify-start w-full mb-6 p-2">
      <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
      </a>

      {/* <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
      </a>
      <p className="text-white text-base">Amount: {amount} ETH</p> */}
      {message && (
            <>
              <br />
              <p className="text-white text-base"> {message}</p>
            </>
      )}
      </div>
      <img
          src={array[Math.floor(Math.random() * array.length)]}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
      <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p className="text-[#37c7da] font-bold">??????{Math.floor(1+Math.random() * 150)}  ????{Math.floor(1+Math.random() * 300)}   ????{Math.floor(1+Math.random() * 50)}
        </p>
      </div>


      </div>
    </div>
    );
}

const Transactions = ()=>{
    const {currentAccount,transactions}=useContext(TransactionContext);
    return(
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
          <div className="flex-row">
              {/* {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">
              
            </h3>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              Connect your account to see the latest transactions
            </h3>
          )} */}
          </div>
        <div className="flex flex-col md:p-12 py-12 px-4">

  
          <div className="flex flex-wrap justify-center items-center mt-10">
            {transactions.reverse().map((transaction,i)=>(
               <TransactionsCard key={i} {...transaction} />
            ))

            }
          </div>
        </div>
      </div>
    );

}
export default Transactions;