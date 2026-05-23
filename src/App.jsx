import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Pages/Home.jsx';
import BookConsult from './Components/Pages/BookConsult.jsx';
import GenericPage from './Components/Pages/GenericPage.jsx';
import WhatsAppButton from './Components/WhatsappButton.jsx';
import AboutUs from './Components/Pages/AboutUs.jsx';
import Services from './Components/Pages/Services.jsx';
import ServiceDetail from './Components/Pages/ServiceDetail.jsx';
import Products from './Components/Pages/Products.jsx';
import ProductDetail from './Components/Pages/ProductDetail.jsx';
import Contact from './Components/Pages/Contact.jsx';
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-consult" element={<BookConsult />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />         
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* Removed the duplicate AboutUs route */}
          <Route path="*" element={<GenericPage title="404" icon="error" description="Not Found" />} />
        </Routes>
        <WhatsAppButton />
      </Layout>
    </Router>
  );
}