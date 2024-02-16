import React from 'react';

import featureStore from "../../store/FeatureStore.js";
import parse from "html-react-parser";

const LegalServiceList = () => {
let {LegalService}=featureStore();
console.log("legal:",LegalService.length);
    return (
        <div className="container mt-3">
            <div className="row ">
                <div className="col-md-12">
                    <div className="card p-4">
                        {parse(LegalService[0]['description'])}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LegalServiceList;