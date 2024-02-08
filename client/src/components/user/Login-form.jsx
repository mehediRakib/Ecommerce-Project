import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import toast, {Toaster} from "react-hot-toast";
import ValidationHelper from "../../utility/validationHelper.js";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    let navigate=useNavigate();

    let {LoginFormData,LoginFormOnChange,UserOTPRequest}=UserStore();


    const onFormSubmit=async () => {
        if(!ValidationHelper.IsEmail(LoginFormData.email)){
            toast.error("Valid Email Address Required")
        }else {
            let res=await UserOTPRequest(LoginFormData.email);
            res?navigate("/OTP"):toast.error("Something Went Wrong !")
        }
    }

    return (
        <div className="container section">
            <div className="row justify-content-center d-flex">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter your Email</h4>
                        <p>A otp code will be set to the email address you provide</p>
                        <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} className="form-control" type="email" placeholder="Email Address"/>
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next"/>
                    </div>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                />

        </div>
    );
};

export default LoginForm;