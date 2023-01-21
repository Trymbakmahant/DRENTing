import { createContext,useState } from "react";
export const accContext = createContext({});
const Wrapper = (props)=>{
    const[acclogin,setAcclogin]  = useState({
        provider:null,
        signer:null,
        accountAddress:null
  
    }) ;
    function addData (provider, signer,accountAddress) {

        setAcclogin((prevState) => {
            return {
                provider,
                signer,
                accountAddress,
                
            }
        })
    }
    
const dataState={
addData,
acclogin
}
console.log(acclogin);
return(
    
<accContext.Provider value={{dataState}}>
    {props.children}
    </accContext.Provider>
)
}
export default Wrapper;