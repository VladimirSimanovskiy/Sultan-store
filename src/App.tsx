import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.scss';
import products from './assets/products.json';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import CardPage from './pages/CardPage';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={ <MainPage />}/>
        <Route path='/basket' element={ <BasketPage />}/>
        <Route path='/card/:id' element={ <CardPage />}/>
      </Routes>
    </div>
  );
}

export default App;
