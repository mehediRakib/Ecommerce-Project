import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/product-list.jsx";
import productStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";

const ProductByCategory = () => {

    const {ListByCategoryRequest}=productStore();
    const {id}=useParams();
    useEffect(() => {
        (async () => {
            await ListByCategoryRequest(id);
        })()
    }, [id]);
    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByCategory;