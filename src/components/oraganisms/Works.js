import React, { useState, useCallback } from 'react';
import Image from 'next/image';

import * as style from '../../styles/index.module.scss';
import works from '../../data/worksData';
import { WorkDetailModal } from './WorkDetailModal';
import { useSelectWork } from '../../hooks/useSelectWork';

export const Works = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { onSelectWork, selectedWork } = useSelectWork();

  const onClickWork = useCallback(
    (id) => {
      console.log(id);
      onSelectWork({ id, works });
      setIsOpen(true);
    },
    [works, onSelectWork]
  );
  // モーダルを開く処理
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={style.works}>
      <div>
        <h2>Works</h2>
      </div>
      <div className={style.worksWrapper}>
        {works.map((item) => (
          <div key={item.id}>
            <div
              className={style.worksContainer}
              onClick={() => onClickWork(item.id)}
            >
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
          </div>
        ))}
      </div>
      <WorkDetailModal
        work={selectedWork}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};
