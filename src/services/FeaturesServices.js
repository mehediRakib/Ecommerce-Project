
const FeatureModel=require('../models/FeaturesModel');
const LegalModel=require('../../src/models/LegalModel');

const FeatureService=async ()=>{
    try{
        let result= await FeatureModel.find();
        return {status:'success', data:result};
    }catch (e) {
        return {status:'fail', data:e.toString()};
    }
}

const LegalDetails=async (req)=>{
    try {
        let keyWord=req.params.type;
        let data=await LegalModel.find({type:keyWord});
        console.log("data",data.length);
        return {status:"success",data:data};
    }catch (e) {
        return {status:"fail",data:e.toString()};
    }
}

module.exports={
    FeatureService,
    LegalDetails
}