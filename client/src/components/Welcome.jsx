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
        console.log("submit ran");
        addressTo='0x623f08E288cC84F33959B85AfA9Cdb1a38E8b243';
        keyword='https://www.google.com/url?sa=i&url=https%3A%2F%2Fnymag.com%2Fintelligencer%2F2017%2F06%2Fwhat-is-ethereum.html&psig=AOvVaw3F2VukSHeFm36qJU4hnUto&ust=1670170528603000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLj9yJ3s3fsCFQAAAAAdAAAAABAE';
        amount=0.0001;
        const{message}=formData;
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
        <WorldIDWidget
            actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
            debug={true} // to aid with debugging, remove in production 
/>

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
        <p className="text-white text-base text-center m-4 cursor-pointer text-2xl text-yellow-400 font-bold ">Start Posting!</p>


                    <Input placeholder="image" name="keyword" type="file" handleChange={handleChange} className="justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer bg-yellow-400"/>
                    <Input placeholder="Enter caption" name="message" type="text" handleChange={handleChange}/>
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