import React, {useEffect} from 'react';
import userStore from "../../store/UserStore.js";
import toast, {Toaster} from "react-hot-toast";

const ProfileForm = () => {

    let {profileDetails,ProfileForm,profileSaveRequest,profileFromChange,ProfileDetailsRequset}=userStore();
    useEffect(() => {
        (async () => {
            await ProfileDetailsRequset();
        })()
    }, []);
    const onSave=async ()=>{
        let res=await profileSaveRequest(ProfileForm);
        if(res){
            toast.success("Profile Updated")
            await ProfileDetailsRequset();
        }
        else{
            toast.error("failed");
        }
    }

    return (
            <div className="container mb-4">
                <div className="card p-5 rounded-3">
                    <h6>Customer Details</h6>
                    <hr/>
                        <div className="row">
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Name</label>
                                <input value={ProfileForm.cus_name} onChange={(e)=>{profileFromChange('cus_name',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Phone</label>
                                <input value={ProfileForm.cus_phone} onChange={(e)=>{profileFromChange('cus_phone',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Fax</label>
                                <input value={ProfileForm.cus_fax} onChange={(e)=>{profileFromChange('cus_fax',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Country</label>
                                <input value={ProfileForm.cus_country} onChange={(e)=>{profileFromChange('cus_country',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer City</label>
                                <input value={ProfileForm.cus_city} onChange={(e)=>{profileFromChange('cus_city',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer State</label>
                                <input value={ProfileForm.cus_state} onChange={(e)=>{profileFromChange('cus_state',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Post</label>
                                <input value={ProfileForm.cus_postcode} onChange={(e)=>{profileFromChange('cus_postcode',e.target.value)}} className="form-control " type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Customer Address</label>
                                <input value={ProfileForm.cus_add} onChange={(e)=>{profileFromChange('cus_add',e.target.value)}} className="form-control " type="text"/>
                            </div>

                        </div>
                    <h6>Shipping Details</h6>
                    <hr/>
                        <div className="row">
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping Name</label>
                                <input value={ProfileForm.ship_name} onChange={(e)=>{profileFromChange('ship_name',e.target.value)}} className="form-control" type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping Phone</label>
                                <input value={ProfileForm.ship_phone} onChange={(e)=>{profileFromChange('ship_phone',e.target.value)}} className="form-control" type="text"/>
                            </div>

                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping Country</label>
                                <input value={ProfileForm.ship_country} onChange={(e)=>{profileFromChange('ship_country',e.target.value)}} className="form-control" type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping City</label>
                                <input value={ProfileForm.ship_city} onChange={(e)=>{profileFromChange('ship_city',e.target.value)}} className="form-control" type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping State</label>
                                <input value={ProfileForm.ship_state} onChange={(e)=>{profileFromChange('ship_state',e.target.value)}} className="form-control" type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping Post Code</label>
                                <input value={ProfileForm.ship_postcode} onChange={(e)=>{profileFromChange('ship_postcode',e.target.value)}} className="form-control" type="text"/>
                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-control">Shipping Address</label>
                                <input value={ProfileForm.ship_add} onChange={(e)=>{profileFromChange('ship_add',e.target.value)}} className="form-control" type="text"/>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-3">
                            <button onClick={onSave} className="btn btn-success">Save</button>
                        </div>

                    </div>

                </div>
                <Toaster
                position="bottom-center"/>
            </div>
    );
};

export default ProfileForm;