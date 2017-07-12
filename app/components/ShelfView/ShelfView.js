import React from 'react';
import { object } from 'prop-types';
import Movie from '../Movie/Movie';

const ShelfView = () => {
  return (
    <div className='shelf-view'>
      Shelf that includes....hard-coded movies...
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
};

export default ShelfView;
