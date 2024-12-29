import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home,Details,Notfound} from './pages/index';
import { ProductsProvider } from './context/productsContext';
import './App.css';


function App() {
  return (
    <ProductsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/details"  element={<Details/>} />
        <Route path="*"  element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
    </ProductsProvider>
  )
}

export default App
