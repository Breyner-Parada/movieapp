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
          <Route path="/movieapp" element={<Page.Home />} />
          <Route path="/movieapp/action" element={<Page.Accion />} />
          <Route path="*" element={<Page.NotFound />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
