import { object, string, TypeOf } from 'zod';

export const schemaEditUser = object({
  name: string()
    .nonempty('Заполните имя')
    .max(254, 'Имя должно содержать менее 254 символа'),
  surname: string()
    .nonempty('Заполните фамилию')
    .max(254, 'Фамилия должна содержать менее 254 символа'),
  phone: string().nonempty('Заполните телефон'),
  email: string()
    .nonempty('Заполните email')
    .email('Корректно заполните email'),
});

export type EditUserInput = TypeOf<typeof schemaEditUser>;
