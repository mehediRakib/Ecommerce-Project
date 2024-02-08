import create from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../utility/utility.js";
import Cookies from 'js-cookie';
import unauthorized from "../utility/unauthorized.js";


const UserStore=create((set)=>({

    isLogin:()=>{
        return !! Cookies.get('token')
    },


    LoginFormData:{email:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }

        }))

    },



    UserOTPRequest:async (email)=>{
        set({isFormSubmit:true});
        let res=await axios.get(`/api/v1/userOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false});
        return res.data['status']==='success';
},

    OTPFormData:{otp:""},

    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }

        }))},

    VerifyingOTPRequset:async (otp)=>{
        let email=getEmail();
        set({isFormSubmit:true});
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false});
        return res.data['status']==='success';
    },

    userLogoutRequest:async ()=>{
         set({isFormSubmit:true});
         let res=await axios.get('/api/v1/UserLogout');
         set({isFormSubmit:false});
         return res.data['status']==='success';
    },

    isFormSubmit:false,





    ProfileForm:{cus_city:"",cus_add:"",cus_country:"",cus_fax:"",cus_name:"",cus_phone:"",cus_postcode:"",cus_state:"",ship_add:"", ship_city:"",ship_country:"",ship_name:"",ship_phone:"",ship_postcode:"",ship_state:""},

    profileDetails:null,

    profileFromChange: (name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                    [name]:value
            }
        }))
    },


    ProfileDetailsRequset:async ()=>{
        try{
            let res=await axios.get('/api/v1/readProfile');
           if(res.data['data'].length>0){
               set({ProfileForm:res.data['data'][0]});
               set({profileDetails:res.data['data'][0]});
           }
           else {
               set({profileDetails:[]});
           }
        }catch (e) {
                unauthorized(e.response.status)
        }
    },



    profileSaveRequest:async (postBody)=>{
        try{
            set({profileDetails:null});
            let res=await axios.post('/api/v1/CreateProfile',postBody);
            return res.data['status']==='success';

        }catch (e) {
                unauthorized(e.response.status)
        }
    }


}))



export default UserStore;