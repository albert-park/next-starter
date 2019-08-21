import React from 'react';
import RowStyles from './index.styles';

const Row = ({ children }) => (
  <div className="row">
    {children}
    <style jsx>
      {RowStyles}
    </style>
  </div>
);

export default Row;
