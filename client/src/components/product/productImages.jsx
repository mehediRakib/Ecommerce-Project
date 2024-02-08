import React from 'react';
import productStore from "../../store/ProductStore.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const ProductImages = () => {
    const {Details}=productStore();
    let Images=[
        {original:Details[0]['details']['img1'], thumbnail: Details[0]['details']['img1']},
        {original:Details[0]['details']['img2'], thumbnail: Details[0]['details']['img2']},
        {original:Details[0]['details']['img3'], thumbnail: Details[0]['details']['img3']},
        {original:Details[0]['details']['img4'], thumbnail: Details[0]['details']['img4']},
        {original:Details[0]['details']['img5'], thumbnail: Details[0]['details']['img5']},
        {original:Details[0]['details']['img6'], thumbnail: Details[0]['details']['img6']},

    ]
    return (
        <div>
            <ImageGallery items={Images} autoPlay={true}/>
        </div>
    );
};

export default ProductImages;