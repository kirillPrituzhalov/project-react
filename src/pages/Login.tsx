import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {},
  });

  const submit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit(submit, error)}>
          <h3>Авторизация</h3>
          <div className="login__item login__email">
            <label>Электронная почта</label>
            <input
              {...register('email', { required: true })}
              value={valueEmail}
              onChange={onChangeInputEmail}
              type="text"
              placeholder="example@mail.ru"
              aria-invalid={errors.email ? true : false}
            />
          </div>
          <div className="login__item login__password">
            <label>Пароль</label>
            <input
              {...register('password')}
              value={valuePassword}
              onChange={onChangeInputPassword}
              type="text"
              placeholder="Введите 8 значный пароль"
            />
          </div>
          <div className="login__item login__btn">
            <input type="submit" value="Продолжить" />
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
