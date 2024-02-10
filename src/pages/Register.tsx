import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';

import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Link, useNavigate } from 'react-router-dom';

import { EmailInput } from '../components/formComponents/register/EmailInput';
import { PasswordInput } from '../components/formComponents/register/PasswordInput';
import { ConfirmPasswordInput } from '../components/formComponents/register/ConfirmPasswordInput';
import { RegisterInput, schemaRegister } from '../@types/schemaRegister';
import { useAppDispatch } from '../redux/store';
import { registerFirstStep } from '../redux/slice/registerSlice';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(schemaRegister),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    dispatch(registerFirstStep(data));
    navigate('/about');
    methods.reset();
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
  return (
    <div className="container">
      <div className="register">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h3>Регистрация</h3>
            <EmailInput />
            <PasswordInput />
            <ConfirmPasswordInput />

            <div className="register__item register__btn">
              <Button
                variant="contained"
                disabled={!methods.formState.isValid}
                type="submit"
              >
                <span>Продолжить</span>
              </Button>
            </div>

            <div className="register__item register__login">
              <span>Уже есть аккаунт?</span>
              <Link to="/login">Войти</Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
export default Register;
