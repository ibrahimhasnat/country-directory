import React, { Fragment } from 'react';
import Country from './Countries/Country';

const SearchResult = ({ countries }) => {
  return (
    <Fragment>
      <div className='row'>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </div>
    </Fragment>
  );
};

export default SearchResult;
