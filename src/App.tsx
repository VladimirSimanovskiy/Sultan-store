import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.scss';
import products from './assets/products.json';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {
  const products_list = products.products;
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={ <MainPage />}/>
        <Route path='/basket' element={ <BasketPage />}/>

      </Routes>
    </div>
  );
}

export default App;
