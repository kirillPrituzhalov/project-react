import s from './Modal.module.scss';
import React from 'react';
import { useAppDispatch } from '../../redux/store';
import {
  onClickModal,
  selectProfileOpenModal,
} from '../../redux/slice/profileSlice';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/slice/authSlice';

const Modal: React.FC = () => {
  const hideModal = useSelector(selectProfileOpenModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addClassActive = hideModal ? s.active : '';
  const classModal = s.modal + ' ' + addClassActive;

  const onClickCloseModal = () => dispatch(onClickModal(false));
  const onClickLogout = () => {
    dispatch(logOut());
    dispatch(onClickModal(false));
    navigate('/login');
  };
  return (
    <div className={classModal} onClick={onClickCloseModal}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <svg
          onClick={onClickCloseModal}
          className="button"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9432_1303)">
            <path
              d="M14.9998 4.99985C14.8436 4.84362 14.6317 4.75586 14.4107 4.75586C14.1897 4.75586 13.9778 4.84362 13.8215 4.99985L9.99985 8.82152L6.17818 4.99985C6.02191 4.84362 5.80998 4.75586 5.58901 4.75586C5.36804 4.75586 5.15612 4.84362 4.99985 4.99985C4.84362 5.15612 4.75586 5.36804 4.75586 5.58901C4.75586 5.80998 4.84362 6.02191 4.99985 6.17818L8.82152 9.99985L4.99985 13.8215C4.84362 13.9778 4.75586 14.1897 4.75586 14.4107C4.75586 14.6317 4.84362 14.8436 4.99985 14.9998C5.15612 15.1561 5.36804 15.2438 5.58901 15.2438C5.80998 15.2438 6.02191 15.1561 6.17818 14.9998L9.99985 11.1782L13.8215 14.9998C13.9778 15.1561 14.1897 15.2438 14.4107 15.2438C14.6317 15.2438 14.8436 15.1561 14.9998 14.9998C15.1561 14.8436 15.2438 14.6317 15.2438 14.4107C15.2438 14.1897 15.1561 13.9778 14.9998 13.8215L11.1782 9.99985L14.9998 6.17818C15.1561 6.02191 15.2438 5.80998 15.2438 5.58901C15.2438 5.36804 15.1561 5.15612 14.9998 4.99985Z"
              fill="#CACDD7"
            />
          </g>
          <defs>
            <clipPath id="clip0_9432_1303">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h3>Вы уверены что хотите выйти из аккаунта?</h3>
        <div>
          <button
            onClick={onClickCloseModal}
            className={'button' + ' ' + s.cancel}
          >
            Отмена
          </button>
          <button onClick={onClickLogout} className={'button' + ' ' + s.exit}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
