import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.scss';
import {Header} from './Header/Header'
import { RentalList } from './Rental/RentalList';
import { RentalDetail } from './Rental/RentalDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
      <div className="container-fluid">
        <Route exact path="/" render={()=> <Redirect to='/rentals'/> }/>
        <Route exact path="/rentals" component={RentalList}/>
        <Route exact path="/rentals/:id" component={RentalDetail}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
