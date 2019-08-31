import React from 'react';
import { Link } from 'react-router-dom';

const Region = () => {
  return (
    <div className='regions'>
      <Link to='region/all' className='region-heading light-blue white-text'>
        All Region
      </Link>
      <Link to='/region/asia' className='region-heading light-blue white-text'>
        Asia
      </Link>
      <Link
        to='/region/europe'
        className='region-heading light-blue white-text'
      >
        Europe
      </Link>
      <Link
        to='/region/americas'
        className='region-heading light-blue white-text'
      >
        Americas
      </Link>
      <Link
        to='/region/africa'
        className='region-heading light-blue white-text'
      >
        Africa
      </Link>
      <Link
        to='/region/oceania'
        className='region-heading light-blue white-text'
      >
        Oceania
      </Link>
    </div>
  );
};

export default Region;
