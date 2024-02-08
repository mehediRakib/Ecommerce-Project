import React from 'react';
import wishStore from "../store/WishStore.js";

const WishSubmitButton = (props) => {
    const {isWishSubmit}=wishStore();

    if(isWishSubmit===false){
        return <button onClick={props.onClick} className={props.className}>{props.text}</button>
    }
    else{
        return <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div>Processing...</button>
    }
};

export default WishSubmitButton;