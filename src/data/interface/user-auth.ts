import { ILoginDTO, IUserLoginResponse } from '../model/user';

interface IAuthUser {
  handleSigninWhithEmailAndPassword: ({
    email,
    password,
  }: ILoginDTO) => Promise<IUserLoginResponse>;
}

export type { IAuthUser };
