import React, {useEffect} from 'react';
import productStore from "../store/ProductStore.js";
import ProductList from "../components/product/product-list.jsx";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";

const ProductByKeyword = () => {
    const {ListByKeywordRequest} = productStore();
    let {keyword} = useParams();

    useEffect(() => {
        (async () => {
            await ListByKeywordRequest('About');
        })();
    }, [Date.now()]);

    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};


export default ProductByKeyword;