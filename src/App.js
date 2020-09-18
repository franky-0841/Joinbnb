import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.scss';
import {Header} from './Header/Header'
import  RentalListing  from './components/rental/rental-listing/RentalListing';
import  RentalDetail  from './components/rental/rental-detail/RentalDetail';
import { Provider } from 'react-redux';

function App() {

 const store = require('./reducers').init()
  return (
   <Provider store={store}>
      <BrowserRouter>
    <div className="App">
     <Header/>
      <div className="container-fluid">
        <Route exact path="/" render={()=> <Redirect to='/rentals'/> }/>
        <Route exact path="/rentals" component={RentalListing}/>
        <Route exact path="/rentals/:id" component={RentalDetail}/>
      </div>
    </div>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
