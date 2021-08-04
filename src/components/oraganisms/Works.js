import React from 'react';
import Image from 'next/image';

import * as style from '../../styles/index.module.scss';
import data from '../../data/worksData';
export const Works = () => {
  return (
    <div className={style.works}>
      <div>
        <h2>Works</h2>
      </div>
      <div className={style.worksWrapper}>
        {data.map((item) => (
          <div className={style.worksContainer}>
            <div className={style.worksImageContainer}>
              <Image src={item.backImage} layout="fill" />
              <Image
                src={item.image}
                width={500}
                height={300}
                className={style.portfolioImage}
              />
            </div>
            <div className={style.intro}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className={style.introFooter}>
                <p>{item.createdDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
