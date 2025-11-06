import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import City from "./components/City";
import Login from "./pages/Login";
import CityList from "./components/cityList";
import CountryList from "./components/CountryList";
import { createContext, useEffect, useState } from "react";
import Form from "./components/Form";

export const DataContext = createContext();

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currCity, setCurrCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await response.json();
      setCurrCity(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DataContext.Provider value={{ cities, isLoading, currCity, getCity }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />}></Route>
            <Route path="city/:id" element={<City />} />
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="forms" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
