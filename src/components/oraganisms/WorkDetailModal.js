import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

import * as style from '../../styles/index.module.scss';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '70%',
    height: '60%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export const WorkDetailModal = (props) => {
  const { work, modalIsOpen, afterOpenModal, closeModal } = props;

  const [workTitle, setWorkTitle] = useState('');
  const [workImage, setWorkImage] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    setWorkTitle(work?.title ?? '');
    setWorkImage(work?.image ?? '');
    setWorkDescription(work?.description ?? '');
    setPath(work?.path ?? '');
  }, [work]);

  return (
    <Modal
      // isOpenがtrueならモダールが起動する
      isOpen={modalIsOpen}
      // モーダルが開いた後の処理を定義
      onAfterOpen={afterOpenModal}
      // モーダルを閉じる処理を定義
      onRequestClose={closeModal}
      // スタイリングを定義
      style={customStyles}
    >
      <div style={style.modalHeader}>
        <h2>{workTitle}</h2>
        <button onClick={closeModal}>close</button>
      </div>
      <div>
        <p>{workDescription}</p>
        <Image src={workImage} width={400} height={200} />
      </div>
      <div>
        {/* 学んだこと？ */}
        <div>
          <h3></h3>
          <p></p>
        </div>
        {/* 学んだこと？ */}
        <div>
          <h3></h3>
          <p></p>
        </div>
        {/* 学んだこと？ */}
        <div>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div>
        <button>View the site</button>
      </div>
    </Modal>
  );
};
