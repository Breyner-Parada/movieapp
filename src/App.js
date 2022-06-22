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
          <Route path="/movieapp/category/:name/:id" element={<Page.Categories />} />
          <Route path="/movieapp/movie/:id" element={<Page.MovieDetail />} />
          <Route path="/movieapp/movies/search/:query" element={<Page.SearchMovie />} />
          <Route path="*" element={<Page.NotFound />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
