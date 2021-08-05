import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';

import { GrClose } from 'react-icons/gr';

import * as style from '../../styles/modal.module.scss';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '40%',
    height: '70%',
    transform: 'translate(-50%, -50%)',
    padding: '2%',
  },

  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTop: {
    marginTop: '0.2%',
    paddingTop: '3%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  modalImage: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    minHeight: '100px',
    padding: '3%',
    alignItems: 'center',
  },
  modalTopImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '0 auto',
  },

  skillContainer: {
    marginTop: '2%',
  },

  skillsWrapper: {
    marginTop: '2%',
    display: 'flex',
  },
  skillIcon: {
    paddingRight: '3%',
  },
  modalFooter: {},
  modalFooterButton: {
    marginRight: '3%',
    marginBottom: '3%',
    position: 'fixed',
    borderRadius: '5%',
    border: 'none',
    bottom: 0,
    right: 0,
    padding: '2%',
    fontSize: 'medium',
    fontWeight: '600',
    backgroundColor: '#00B2B2',
    color: '#F6F7F7',
  },
};

Modal.setAppElement('#__next');

export const WorkDetailModal = (props) => {
  const { work, modalIsOpen, afterOpenModal, closeModal } = props;

  const [workTitle, setWorkTitle] = useState('');
  const [workImage, setWorkImage] = useState('');
  const [workBackImage, setWorkBackImage] = useState('');

  const [workDescription, setWorkDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [skills, setSkills] = useState([]);

  const [path, setPath] = useState('');

  useEffect(() => {
    setWorkTitle(work?.title ?? '');
    setWorkImage(work?.image ?? '');
    setWorkBackImage(work?.backImage ?? '');
    setWorkDescription(work?.description ?? '');
    setPath(work?.path ?? '');
    setSkills(work?.skills ?? []);
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
      <div style={customStyles.modalHeader}>
        <h1>{workTitle}</h1>
        <GrClose onClick={closeModal} size={30} color={'#ccc'} />
      </div>
      <div style={customStyles.modalTop}>
        <div style={customStyles.modalImage}>
          <Image src={workBackImage} layout="fill" />
          <Image
            src={workImage}
            width={700}
            height={330}
            style={customStyles.modalTopImage}
          />
        </div>

        <p>{workDescription}</p>
      </div>
      <div style={customStyles.skillContainer}>
        {/* 学んだこと？ */}
        <div>
          <h3>開発環境</h3>
          <div style={customStyles.skillsWrapper}>
            {skills.map((skill) => (
              <div style={customStyles.skillIcon}>
                <Image src={skill} height="50" width="50" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={customStyles.modalFooter}>
        <Link href={path}>
          <a>
            <button style={customStyles.modalFooterButton}>
              View the site
            </button>
          </a>
        </Link>
      </div>
    </Modal>
  );
};
