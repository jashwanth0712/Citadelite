import React,{useContext}from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import { shortenAddress } from "../utils/shortenAddress";

import {Loader} from './';
import { TransactionContext } from "../context/TransactionContext";
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Input =({placeholder,name,type,value,handleChange})=>(
    <input
    placeholder={placeholder} 
    type={type}
    step="0.0001"
    value={value}
    onChange={(e)=>handleChange(e,name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);
const Welcome = ()=>{
    const {connectWallet,currentAccount,formData,setformData,handleChange,sendTransaction,isLoading}=useContext(TransactionContext);
    //console.log(connectWallet);


    const handleSubmit =(e)=>{
        console.log("submit ran");
        addressTo='0x623f08E288cC84F33959B85AfA9Cdb1a38E8b243';
        amount=0.0001;
        const{keyword,message}=formData;
        console.log("info from the form are as follows :  addressto ",addressTo," msg ",message,"form data is ",formData)
        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }


   // console.log("current account is ",currentAccount)
    return(
        <div className="flex-column w-full justify-center items-center">
            {/* ------------------------------------- */}
           
        {/* ---------------------------------------------- */}
                        {!currentAccount && <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                <p className="text-white text-base font-semibold"> Connect Wallet</p>
                </button>}
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                   
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    {/* <Input placeholder="photo url" name="keyword" type="text" handleChange={handleChange}/> */}
                    <Input placeholder="image" name="keyword" type="file" handleChange={handleChange}/>
                    <Input placeholder="Enter caption" name="message" type="text" handleChange={handleChange}/>
                    <div className="h-[1px] w-full bg-gray-400 my-2"/>
                    {
                    isLoading
                    ?<Loader/>
                    :<button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                    >
                        Post
                    </button>
                        }
                    </div> 
                </div>
            </div>
        </div>
    );

}
export default Welcome;