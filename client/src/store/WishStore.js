import create from "zustand";
import axios from "axios";
import unauthorized from "../utility/unauthorized.js";


const wishStore=create((set)=>({
    wishCount:0,
    wishList:null,



    wishListRequest:async ()=>{
        try{
            let res=await axios.get('/api/v1/WishList');
            set({wishList:res.data['data']});
            set({wishCount:res.data['data'].length});

        }catch (e) {
            unauthorized(e.response.value);
        }

    },
        isWishSubmit:false,
    wishForm:{productID:""},
    saveWishList:async (postBody)=>{
        try{
            set({isWishSubmit:true})
            let res=await axios.post('/api/v1/SaveWishList',postBody);
            return res.data['status']==='success';
        }catch (e) {
                unauthorized(e.response.value);
        }
        finally {
            set({isWishSubmit:false})
        }

    }



}))
export default wishStore;
