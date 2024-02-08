import axios from "axios";
import create from "zustand";
import unauthorized from "../utility/unauthorized.js";


const cartStore=create((set)=>({

    cartForm:{productID:"",color:"",size:""},
    cartFormChange: (name,value)=>{
        set((state)=>({
            cartForm:{
                ...state.cartForm,
                [name]:value,
            }
        }))
    },
    cartCount:0,
    cartList:null,
    cartListRequest:async ()=>{
        try{
            let res=await axios.get('/api/v1/cartList');
            set({cartCount: res.data['data'].length});
            set({cartList:res.data['data']});
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    isCartSubmit:false,

    CartSaveRequest:async (postBody,quantity)=>{
        try{
            set({isCartSubmit:true});
            postBody.qty=quantity;
            let res=await axios.post('/api/v1/saveCartList',postBody)
            return res.data['status']==='success';

        }catch (e) {
            unauthorized(e.response.status)

        }finally{
            set({isCartSubmit:false})
        }
    }
}))

export  default  cartStore;