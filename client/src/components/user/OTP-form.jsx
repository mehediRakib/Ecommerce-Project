import React from 'react';
import userStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/validationHelper.js";
import {useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import UserSubmitButton from "./UserSubmitButton.jsx";

const OtpForm = () => {
    let{OTPFormData,OTPFormOnChange,VerifyingOTPRequset}=userStore();
    let navigate=useNavigate();
    let otpFormSubmit=async ()=>{
        if(ValidationHelper.IsEmpty(OTPFormData.otp)){
                toast.error("Valid Pin Required");
        }
        else {
            let res = await VerifyingOTPRequset(OTPFormData.otp);
           res?navigate('/'):toast.error("Something went wrong");
        }
    }
    return (
        <div className="container section">
            <div className="row justify-content-center d-flex">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email address you provide</p>
                        <input value={OTPFormData.otp} onChange={(e)=>{OTPFormOnChange("otp",e.target.value)}} className="form-control"  placeholder="Verification" type="text"/>
                        <UserSubmitButton onClick={otpFormSubmit} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
                <Toaster
                position="bottom-center"/>
        </div>
    );
};

export default OtpForm;