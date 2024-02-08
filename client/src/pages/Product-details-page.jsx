import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import Brand from "../components/product/Brand.jsx";
import {useParams} from "react-router-dom";
import productStore from "../store/ProductStore.js";
import Details from "../components/product/details.jsx";


const ProductDetailsPage = () => {
    const {ProductID}=useParams();
    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest}=productStore();
    useEffect(() => {
        (async ()=>{
            await DetailsRequest(ProductID);
            await ReviewListRequest(ProductID);
            BrandList===null?await BrandListRequest():null;
        })()
    }, [ProductID]);
    return (
        <Layout>
                <Details/>
                <Brand/>
        </Layout>
    );
};

export default ProductDetailsPage;