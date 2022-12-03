import React,{useEffect,useState} from "react";
import {ethers} from 'ethers';
import {contractABI,contractAddress} from '../utils/constants';
export const TransactionContext = React.createContext();
const {ethereum}= window;

const getEthereumContract =()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
    console.log("getetheruem contract ran",transactionContract)
    return transactionContract;

}

export const TransactionProvider = ({children})=>{
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData,setformData]=useState({addressTo:'',amount:'',keyword:'',message:''});

    const [isLoading , setIsLoading]=useState(false);
    const [transactions,setTransactions]=useState([]);
    const [transactionCount,setTransactionCount]=useState(localStorage.getItem('transactionCount'));
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };

    const getAllTransactions = async() =>{
        try{
        if(!ethereum) return alert("Please install metamask");
        const transactionContract = getEthereumContract();
        const availableTransactions = await transactionContract.getAllTransactions();
       console.log("available transactions : ",availableTransactions);
    
    
       const structuredTransactions = availableTransactions.map((transaction) => ({
        addressTo: transaction.reciever,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
      }));
    
      console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    
    }
        catch(error){
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async()=>{
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({method:'eth_accounts'});
        if(accounts.length){
            setCurrentAccount(accounts[0]);

            getAllTransactions();
        }else{
            console.log("No accounts found");
        }
        console.log(accounts);
    }

    const checkIfTransactionExist = async()=>{
        try{
        const transactionContract = getEthereumContract();
        const transactionCount = await  transactionContract.getTransactionCount();
        window.localStorage.setItem("transactionCount",transactionCount);
        }
        catch(error)
        {
            console.log(error)
            throw new Error("no ethereum object")
        }
    }

    const connectWallet = async ()=>{
        try{
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
          //  console.log("account is  : ",accounts[0]);
            setCurrentAccount(accounts[0]);
        }
        catch(error){
            console.log(error)
            throw new Error("no ethereum object")
        }
    }

    const sendTransaction = async()=>{
        try{
            console.log("send transactoin i")
            if(!ethereum) return alert("Please install metamask");

            const{addressTo,amount,keyword,message}=formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            
            await ethereum.request({
                method : 'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',//21000 gwei a sub unit of ether
                    value:parsedAmount._hex,
                }]

            });
            const transactionHash= await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);

            setIsLoading(true);
            console.log(`loading - ${transactionHash.hash}`)
            await transactionHash.wait();
            console.log(`sucess - ${transactionHash.hash}`)
            setIsLoading(false);

            const transactionCount = await  transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber()); 
        }
        catch(error)
        {  
            console.log(error);
        throw new Error("No ethereum object",error)
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
        checkIfTransactionExist();
    },[]);
    return(
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setformData,handleChange,sendTransaction,transactions,isLoading}}>
            {children}
        </TransactionContext.Provider>
    )
}