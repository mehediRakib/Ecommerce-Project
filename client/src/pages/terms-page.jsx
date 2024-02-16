import React, {useEffect, useState} from 'react';
import Layout from "../components/layout/layout.jsx";
import featureStore from "../store/FeatureStore.js";
import LegalServiceList from "../components/features/legalServiceList.jsx";


const TermsPage = () => {
    const {LegalServiceRequest}=featureStore();
    useEffect(() => {
        (async () => {
            await LegalServiceRequest('About');
        })()

    }, []);
    return (
        <Layout>
                <LegalServiceList/>
        </Layout>
    );
};

export default TermsPage;