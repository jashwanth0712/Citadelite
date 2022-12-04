import React,{useContext}from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import { shortenAddress } from "../utils/shortenAddress";
import { WorldIDWidget } from '@worldcoin/id';

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
        console.log("submit ran")
        const{addressTo,amount,keyword,message}=formData;
        console.log("info from the form are as follows :  addressto ",addressTo," msg ",message,"form data is ",formData)
        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }



   // console.log("current account is ",currentAccount)
    return(
        <div className="flex-column  justify-center items-center">
            {/* ------------------------------------- */}
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 m-5 w-full">
            <p className="text-white text-2xl text-center mx-2 mt-3 cursor-pointer navui navlogo">Citadelite</p>
        <p className="text-gray-300 text-base text-center mx-2 mt-3 cursor-pointer navui hover:text-gray-500">Home</p>
        <p className="text-gray-300 text-base text-center mx-2 mt-3 cursor-pointer navui hover:text-gray-500">Chat</p>
        <p className="text-gray-300 text-base text-center mx-2 mt-3 cursor-pointer navui hover:text-gray-500">Video call</p>
      <div className="bg-white p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
       
        <WorldIDWidget
            actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
            debug={true} // to aid with debugging, remove in production 
/>
</div>
        {!currentAccount && <button
                type="button "
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-cyan-500 p-3 rounded-full cursor-pointer hover:bg-cyan-700 ">
                <p className="text-white text-base font-semibold"> Connect Wallet</p>
                </button>}
      </div>
        {/* ---------------------------------------------- */}
                  <div className="items-center text-white text-center m-20 text-7xl font-bold">
                    <p>Social Media that<br></br><span class="text-cyan-400">Rewards</span> you!</p>
                </div>     

            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                   
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input placeholder="Address To" name="addressTo"  type="text" handleChange={handleChange}/>
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
                    <Input placeholder="image url" name="keyword" type="text" handleChange={handleChange}/>
                    <Input placeholder={"image"} type="file"/>
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>
                    <div className="h-[1px] w-full bg-gray-400 my-2"/>
                    {
                    isLoading
                    ?<Loader/>
                    :<button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                    >
                        Send Now
                    </button>
                        }
                    </div> 
                </div>
            </div>
        </div>
    );

}
export default Welcome;