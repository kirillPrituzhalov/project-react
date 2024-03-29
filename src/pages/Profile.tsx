import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import illustration from '../assets/img/illustration.svg';
import FaqItem from '../components/FaqItem/FaqItem';

import { useSelector } from 'react-redux';
import { selectFaqList } from '../redux/slice/profileSlice';
import { Button } from '@mui/material';
import { selectAuth } from '../redux/slice/authSlice';

const Profile = () => {
  const faqList = useSelector(selectFaqList);
  const authUser = useSelector(selectAuth);
  const navigate = useNavigate();

  const faqItem = faqList.map((obj, index) => {
    return <FaqItem key={index} {...obj} />;
  });

  useEffect(() => {
    if (!localStorage.getItem('token') || !localStorage.getItem('user')) {
      navigate('/register');
    }
  }, []);

  return (
    <div className="profile">
      <div className="container">
        <div className="profile__headline">
          <h1>Мой профиль</h1>
          <div className="profile__edit">
            <Link to={'/EditUser'}>
              <Button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11160_664)">
                    <path
                      d="M15.2353 0.765302C14.7821 0.312767 14.1678 0.0585938 13.5273 0.0585938C12.8869 0.0585938 12.2726 0.312767 11.8193 0.765302L0.976677 11.608C0.666178 11.9167 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9646V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9297 0.489866 16 0.666677 16H2.03534C2.47318 16.0012 2.90692 15.9156 3.31145 15.748C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18064C15.6877 3.72743 15.9417 3.11328 15.9417 2.47297C15.9417 1.83266 15.6877 1.21851 15.2353 0.765302V0.765302ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6666H1.33334V13.9646C1.33267 13.7019 1.38411 13.4416 1.4847 13.1989C1.58529 12.9562 1.73302 12.7359 1.91934 12.5506L10.148 4.32197L11.6813 5.8553L3.44934 14.0813ZM14.292 3.23797L12.6213 4.9093L11.088 3.3793L12.7593 1.70797C12.86 1.60751 12.9795 1.52786 13.111 1.47358C13.2424 1.41929 13.3833 1.39143 13.5255 1.39158C13.6678 1.39174 13.8086 1.41991 13.9399 1.47448C14.0712 1.52905 14.1905 1.60896 14.291 1.70964C14.3915 1.81032 14.4711 1.9298 14.5254 2.06126C14.5797 2.19272 14.6076 2.33359 14.6074 2.47581C14.6072 2.61804 14.5791 2.75885 14.5245 2.89019C14.4699 3.02153 14.39 3.14084 14.2893 3.2413L14.292 3.23797Z"
                      fill="#466EFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11160_664">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Редактировать</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="profile__data">
          <div className="profile__data-item">
            <ul>
              <li className="profile__item-top">Имя</li>
              <li className="profile__item-bottom">{authUser.user?.name}</li>
            </ul>
          </div>
          <div className="profile__data-item">
            <ul>
              <li className="profile__item-top">Фамилия</li>
              <li className="profile__item-bottom">{authUser.user?.surname}</li>
            </ul>
          </div>
          <div className="profile__data-item">
            <ul>
              <li className="profile__item-top">Телефон</li>
              <li className="profile__item-bottom">{authUser.user?.phone}</li>
            </ul>
          </div>
          <div className="profile__data-item">
            <ul>
              <li className="profile__item-top">Электронная почта</li>
              <li className="profile__item-bottom">{authUser.user?.email}</li>
            </ul>
          </div>
        </div>
        <div className="profile__banner">
          <div className="profile__banner-text">
            <h2>Ваша продуктивность выросла!</h2>
            <p>За прошлую неделю вы выполнили 12 задач</p>
            <button className="button">Подробнее</button>
          </div>
          <div className="profile__banner-img">
            <img src={illustration} />
          </div>
        </div>
        <div className="profile__faq">
          <h2>Часто задаваемые вопросы</h2>
          <div className="profile__faq-block">
            <ul>{faqItem}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
