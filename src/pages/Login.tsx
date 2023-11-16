import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  const onChangeInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueEmail(event.target.value);
  };

  const onChangeInputPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValuePassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="login">
        <form>
          <h3>Авторизация</h3>
          <div className="login__item login__email">
            <label>Электронная почта</label>
            <input
              value={valueEmail}
              onChange={onChangeInputEmail}
              type="text"
              placeholder="example@mail.ru"
            />
          </div>
          <div className="login__item login__password">
            <label>Пароль</label>
            <input
              value={valuePassword}
              onChange={onChangeInputPassword}
              type="text"
              placeholder="Введите 8 значный пароль"
            />
          </div>
          <div className="login__item login__btn">
            <input disabled type="submit" />
          </div>
          <div className="login__item login__register">
            <span>Еще нет аккаунта?</span>
            <Link to="/register">Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
