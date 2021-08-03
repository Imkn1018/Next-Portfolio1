import React from 'react';
import data from '../../data/worksData';
export const Works = () => {
  return (
    <div>
      <div>Works</div>
      <div>
        {data.map((item) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};
