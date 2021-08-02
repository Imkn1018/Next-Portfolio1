import React from 'react';
import * as style from '../../styles/index.module.scss';
import data from '../../data/skillData';
import Image from 'next/image';

export const Skills = () => {
  return (
    <div className={style.skills}>
      <h2>Skills</h2>
      <div className={style.skillsContainer}>
        {data.map((item) => (
          <div className={style.skillicon}>
            <Image src={item.imageicon} height="80" width="80" />
          </div>
        ))}
      </div>
    </div>
  );
};
