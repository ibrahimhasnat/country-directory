import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryDetails = ({ match }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
      .then(res => setInfo(res.data[0]))
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
  };

  return (
    <Fragment>
      <Link className='btn light-blue' to='/'>
        <i class='waves-effect material-icons left'>house</i> Back to Home
      </Link>
      <br />
      <br />
      <div className='info-block'>
        <div className='row'>
          <div className='col s6'>
            <img src={info.flag} alt={info.name} />
          </div>
          <div className='col s6'>
            <div className='basic-info'>
              <ul className='collection with-header'>
                <li className='collection-header'>
                  <h5>{info.name}</h5>
                </li>
                <li className='collection-item'>
                  <strong>Capital:</strong> {info.capital}
                </li>
                <li className='collection-item'>
                  <strong>Region:</strong> {info.region}
                </li>
                <li className='collection-item'>
                  <strong>Sub Region:</strong> {info.subregion}
                </li>
                <li className='collection-item'>
                  <strong>Native Name:</strong> {info.nativeName}
                </li>
                <li className='collection-item'>
                  <strong>Demonym:</strong> {info.demonym}
                </li>
                <li className='collection-item'>
                  <strong>Area:</strong> {numberWithCommas(parseInt(info.area))}
                </li>
                <li className='collection-item'>
                  <strong>Population:</strong>{' '}
                  {numberWithCommas(parseInt(info.population))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </Fragment>
  );
};

export default CountryDetails;
