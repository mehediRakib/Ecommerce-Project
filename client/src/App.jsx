import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home-Page.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";
import ProductByKeyword from "./pages/product-by-keyword.jsx";
import ProductDetailsPage from "./pages/Product-details-page.jsx";
import LoginPage from "./pages/Login-page.jsx";
import OTPPage from "./pages/OTP-page.jsx";
import ProfilePage from "./pages/Profile-page.jsx";
import TermsPage from "./pages/terms-page.jsx";


const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/by-brand/:id" element={<ProductByBrand/>}/>
              <Route path="/by-category/:id" element={<ProductByCategory/>}/>
              <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}/>
              <Route path="/details/:ProductID" element={<ProductDetailsPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/OTP" element={<OTPPage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/About" element={<TermsPage/>}/>
              <Route path="/refund-policy" element={<TermsPage/>}/>
              <Route path="/terms" element={<TermsPage/>}/>
              <Route path="/how-to-buy" element={<TermsPage/>}/>
              <Route path="/contact" element={<TermsPage/>}/>
              <Route path="/complain" element={<TermsPage/>}/>

          </Routes>
      </BrowserRouter>
    );
};

export default App;