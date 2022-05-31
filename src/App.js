import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Layout} from './Components/Layout';
import { Footer } from './Components/Footer';
import './App.css';
import * as Page from './pages';



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page.Home />} />
          <Route path="/action" element={<Page.Accion />} />
          <Route path="/search" element={<Page.Search />} />
          <Route path="*" element={<Page.NotFound />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
