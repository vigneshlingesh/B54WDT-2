import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { HideLoading, ShowLoading, setPortfolioData } from "./redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./pages/Home/admin";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch (ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
      dispatch(HideLoading());

    } catch (error) {
     dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
