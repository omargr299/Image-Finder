import React from 'react';
import { Provider } from 'react-redux';

import {HomePage, FavsPage} from './pages'
import {Route, Routes} from 'react-router-dom'
import { CardsContainer } from './components';
import { store } from "./App/store";


function App() {
  return (
    <Provider store={store}>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/&search=:s&page=:p' element={
          <div className='w-100 text-align-center' style={{textAlign: "center"}}>
                <HomePage/> 
                <CardsContainer className='mx-auto'/>
              </div>}/>
        <Route path='/favoritos' element={<FavsPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
