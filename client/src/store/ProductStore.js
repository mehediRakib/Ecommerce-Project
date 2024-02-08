
import axios from "axios";
import create from 'zustand';

const ProductStore=create((set)=>({
    BrandList:null,
    CategoryList:null,
    SliderList:null,
    ListByBrand:null,
    ListByCategory:null,
    ListByRemark:null,
    ListBySimilar:null,
    ReviewList:null,
    SearchKeyword:"",
    ListProduct:null,



    SetSearchKeyword:async (keyword)=>{
        set({SearchKeyword:keyword})
    },

    BrandListRequest:async ()=>{
        try {
            let res = await axios.get("/api/v1/ProductBrandList");
            if (res.data['status'] === "success") {
                set({ BrandList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error in BrandListRequest:", error.toString());
        }
    },

     CategoryListRequest:async  ()=>{
        let res=await axios.get('/api/v1/ProductCategoryList');
        if(res.data['status']==="success"){
            set({CategoryList: res.data['data']});
        }
    },


    SliderListRequest:async  ()=>{
        let res=await axios.get('/api/v1/ProductSliderList');
        if(res.data['status']==="success"){
            set({SliderList: res.data['data']});
        }
    },

    ListByBrandRequest: async (BrandID) => {

        let res = await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
        if (res.data['status'] === "success") {
            set({ ListProduct: res.data['data'] });
        }
    },


    ListByCategoryRequest:async  (CategoryID)=>{
        let res=await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListProduct: res.data['data']});
        }
    },


    ListByKeywordRequest: async (Keyword) => {
            let res = await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
            if (res.data['status'] === "success") {
                set({ ListProduct: res.data['data']});
            }
    },



    ListByRemarkRequest:async  (Remark)=>{
        let res=await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
        if(res.data['status']==="success"){
            set({ListByRemark: res.data['data']});
        }
    },

    ListBySimilarRequest:async  (CategoryID)=>{
        let res=await axios.get(`/api/v1/ProductListBySimilar/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListBySimilar: res.data['data']});
        }
    },

    ReviewListRequest:async  (ProductID)=>{
        let res=await axios.get(`/api/v1/ProductReviewList/${ProductID}`);
        if(res.data['status']==="success"){
            set({ReviewList: res.data['data']});
        }
    },

    ListByFilterRequest:async (postBody)=>{
        set({ListProduct:null});
        let res=await axios.post(`/api/v1/ProductListByFilter`,postBody);
        if(res.data['status']==='success'){
            set({ListProduct:res.data['data']})
        }
    },

    Details:null,
    DetailsRequest:async (ProductID)=>{
        set({Details:null});
        let res=await axios.get(`/api/v1/ProductDetails/${ProductID}`);
        if(res.data['status']==='success'){
            set({Details:res.data['data']})
        }
    },


}))

export default ProductStore;