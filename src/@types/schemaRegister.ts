import { object, string, TypeOf } from 'zod';

export const schemaRegister = object({
  email: string()
    .email('Корректно заполните email')
    .nonempty('Заполните email'),
  password: string()
    .nonempty('Заполните пароль')
    .min(8, 'Пароль должен содержать более 8 символов')
    .max(20, 'Пароль должен содержать менее 20 символов'),
  confirmPassword: string().nonempty('Подтвердите свой пароль'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Пароли не совпадают',
});

export type RegisterInput = TypeOf<typeof schemaRegister>;
