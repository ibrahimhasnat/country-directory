import React from 'react';
import { Link } from 'react-router-dom';

export default function Country({ country }) {
  return (
    <div className='col s12 m4'>
      <div className='box'>
        <div className='box-img'>
          <img src={country.flag} alt={country.name} />

          <Link to={`/country/${country.name}`}>
            <div className='read-more'>
              <i className='material-icons'>remove_red_eye</i>
            </div>
          </Link>
        </div>
        <div className='box-content center'>
          <h5>{country.name}</h5>
        </div>
      </div>
    </div>
  );
}
