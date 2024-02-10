export type requestRegister = {
  email: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
};

export type responseRegister = {
  email: string;
  name: string;
  surname: string;
  phone: string;
  id: string;
};
export type responseEditUser = {
  email: string;
  name: string;
  surname: string;
  phone: string;
  id: string;
};
export type requestEditUser = {
  email: string;
  name: string;
  surname: string;
  phone: string;
};

export type requesLogin = {
  email: string;
  password: string;
};

export type responseLogin = {
  accessToken: string;
  refreshToken: string;
};
