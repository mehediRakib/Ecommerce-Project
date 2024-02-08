import React from 'react';
import UserStore from "../../store/UserStore.js";


const UserSubmitButton = (props) => {
     const {isFormSubmit}=UserStore();
     if(isFormSubmit===false){
         return <button type="submit" onClick={props.onClick } className={props.className}>{props.text}</button>
     }
     else {
         return <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div>processing...</button>
     }
};

export default UserSubmitButton;