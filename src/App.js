import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Footer from "./components/Footer/Footer";
import ReadMoreButtonsPages from "./components/ReadMoreButtonsPages/ReadMoreButtonsPages";
import  MyContextProvider  from './context';


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <MyContextProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ReadMoreButtonsPages />} path="/learn-more-hr-features/:id" />
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default App;
