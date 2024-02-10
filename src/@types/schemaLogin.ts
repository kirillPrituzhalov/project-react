import { TypeOf, string, object } from 'zod';

export const schemaLogin = object({
  email: string()
    .nonempty('Заполните email')
    .email('Корректно заполните email'),
  password: string().nonempty('Заполните пароль'),
});

export type LoginInput = TypeOf<typeof schemaLogin>;
