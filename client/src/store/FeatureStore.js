import create from 'zustand'
import axios from "axios";

const FeatureStore=create((set)=>({
    FeatureList:[],
    FeatureListRequest:async ()=>{
        let res=await axios.get(`/api/v1/FeaturesList`)
        if(res.data['status']==='success'){
            set({FeatureList:res.data['data']})
        }
    },
    LegalService:null,
    LegalServiceRequest:async (type)=>{
        let res=await axios.get(`/api/v1/LegalDetails/${type}`);
        console.log("response:",res.data);
        if(res.data['status']==='success'){
            set({LegalService:res.data['data']});
        }
    }
}))


export default FeatureStore;