import axios from "axios"
import { useEffect } from "react";
import Buyrentcard from "../cards/Buyrentcard";

const Buyrent=()=>{
    const url= null;
    const a = async()=>{
        try{
            const {data} =axios.get(`url`,data);
        console.log(data);


        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(data&&data._id){
            a();
        }
    })
    reutrun(
        <div>
            <Buyrentcard/>
        </div>
    )
}