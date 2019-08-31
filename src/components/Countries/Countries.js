import React, { Fragment, useEffect, useState } from 'react';
import Country from './Country';

import axios from 'axios';

export default function Countries({ match }) {
  const region = match.params.name;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let apiUrl;
    if (region === 'all') {
      apiUrl = `https://restcountries.eu/rest/v2/all`;
    } else {
      apiUrl = `https://restcountries.eu/rest/v2/region/${region}`;
    }

    axios
      .get(apiUrl)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err));
  }, [region]);

  return (
    <Fragment>
      <div className='row'>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </div>
    </Fragment>
  );
}
