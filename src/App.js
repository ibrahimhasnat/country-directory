import React, { Fragment, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Region from './components/Region';
import Header from './components/Header';
import Countries from './components/Countries/Countries';
import SearchResult from './components/SearchResult';
import CountryDetails from './components/Countries/CountryDetails';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [searching, setSearching] = useState(false);
  const [countries, setCountries] = useState([]);

  const ajaxReq = value => {
    setSearching(true);
    axios
      .get(`https://restcountries.eu/rest/v2/name/${value}`)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err));
  };

  const searchCountry = e => {
    e.preventDefault();
    ajaxReq(e.target.value);
  };

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <form onSubmit={searchCountry}>
                    <div className='input-field col s12'>
                      <input
                        id='name'
                        type='text'
                        placeholder='Search by country name'
                        onBlur={e => {
                          e.target.value === '' && setSearching(false);
                        }}
                        onChange={e => {
                          ajaxReq(e.target.value);
                        }}
                      />
                    </div>
                  </form>
                  {searching ? (
                    <SearchResult countries={countries} />
                  ) : (
                    <Region />
                  )}
                </Fragment>
              )}
            />
            <Route path='/region/:name' component={Countries} />
            <Route path='/country/:name' component={CountryDetails} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
