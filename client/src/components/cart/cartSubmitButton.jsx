import React from 'react';
import cartStore from "../../store/CartStore.js";

const CartSubmitButton = (props) => {
    let {isCartSubmit}=cartStore();

            if(isCartSubmit===false){
                return  <button  onClick={props.onClick} className={props.className}>{props.text}</button>
            }
            else {
                return <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div>Processing...</button>
            }

};

export default CartSubmitButton;