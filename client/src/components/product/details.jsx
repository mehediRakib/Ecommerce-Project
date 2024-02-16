import React, {useState} from 'react';
import productStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../Skeleton/products-skeleton.jsx";
import ProductImages from "./productImages.jsx";
import CartSubmitButton from "../cart/cartSubmitButton.jsx";
import parse from 'html-react-parser';
import Reviews from "./reviews.jsx";
import cartStore from '../../store/CartStore.js';
import toast, {Toaster} from "react-hot-toast";
import WishSubmitButton from "../wish/wishSubmitButton.jsx";
import WishStore from "../../store/WishStore.js";


const Details = () => {
    const {Details}=productStore();
    const [Quantity,setQuantity]=useState(1);

    const {cartForm,cartFormChange,cartListRequest,CartSaveRequest}=cartStore();

    const {saveWishList,wishForm,wishListRequest}=WishStore();

    const quantityIncrement=()=>{
        setQuantity(Quantity=>Quantity+1);

    }

    const quantityDecrement=()=>{
        if(Quantity>1){
            setQuantity(Quantity=>Quantity-1);

        }
    }

    const AddWish=async (productID)=>{
            wishForm.productID=productID;
            let res=await saveWishList(wishForm);
       if(res){
           toast.success("Item added in WishList");
           await wishListRequest();
       }
    }

    const AddCart=async (productID) => {
        cartForm.productID=productID;
        let res= await CartSaveRequest(cartForm,Quantity);

        if(res){
            toast.success("Cart Item Added");
            await cartListRequest();
        }
    }

    if(Details===null){
        return (<ProductsSkeleton/>)
    }
    else {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages/>
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{Details[0]['title']}</h4>
                            <p className="text-muted bodySmal my-1">Category: {Details[0]['category']['categoryName']}</p>
                            <p className="text-muted bodySmal my-1">Brand: {Details[0]['brand']['brandName']}</p>
                            <p className="text-muted bodySmal my-1"> {Details[0]['shortDes']}</p>
                            {
                                Details[0]['discount']?(<span className="bodyXLarge">Price: <strike class="text-secondary">{Details[0]['price']}</strike>{Details[0]['discountPrice']}</span>):
                                    (<span className="bodyXLarge">Price: {Details[0]['price']}</span>)
                            }

                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">size</label>
                                    <select value={cartForm.size} onChange={(e)=>cartFormChange('size',e.target.value)} className="form-control form-select my-2">
                                        <option value="">Size</option>
                                        {
                                            Details[0]['details']['size'].split(",").map((item,i)=>{
                                                return <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-4 p-2">
                                    <label className="bodySmal">color</label>
                                    <select value={cartForm.color} onChange={(e)=>cartFormChange('color',e.target.value)} className="form-control form-select my-2">
                                        <option value="">Color</option>
                                        {
                                            Details[0]['details']['color'].split(",").map((item,i)=>{
                                                return <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-4 p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button onClick={quantityDecrement} className="btn btn-outline-secondary">-</button>
                                        <input value={Quantity} type="text" className="form-control bg-light text-center" readOnly/>
                                        <button onClick={quantityIncrement} className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>

                                <div className="col-4 p-2">
                                    <CartSubmitButton onClick={()=>AddCart(Details[0]['_id'])} className="btn btn-success w-100" text="add to cart"/>
                                </div>
                                <div className="col-4 p-2">
                                    <WishSubmitButton onClick={()=>AddWish(Details[0]['_id'])} className="btn btn-success w-100" text="Add to Wish"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">Specification</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                                {
                                    parse(Details[0]['details']['des'])
                                }
                            </div>

                            <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">
                                <Reviews/>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster
                    position="bottom-center"/>
            </div>
        );
    }
};

export default Details;