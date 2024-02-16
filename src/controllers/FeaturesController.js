const {FeatureService, LegalDetails} = require("../services/FeaturesServices");


exports.featureList=async (req,res)=>{
    let data=await FeatureService();
    res.status(200).json(data);
}

exports.LeagalService=async (req,res)=>{
    let data=await LegalDetails(req);
    res.status(200).json(data);
}