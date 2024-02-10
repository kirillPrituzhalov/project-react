import { TypeOf, object, string } from 'zod';

export const schemaAbout = object({
  name: string()
    .nonempty('Заполните имя')
    .max(254, 'Имя должно содержать менее 254 символа'),
  surname: string()
    .nonempty('Заполните фамилию')
    .max(254, 'Фамилия должна содержать менее 254 символа'),
  phone: string().nonempty('Заполните телефон'),
});

export type AboutInput = TypeOf<typeof schemaAbout>;
