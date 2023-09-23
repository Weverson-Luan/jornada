/**
 * IMPORTS
 */
import { type ILoginDTO } from 'src/dtos/user-login';

import { UserRepository } from '../../../data/repositories/user/user-repository';

const handleSigninWhithEmailAndPassword = async ({ email, password }: ILoginDTO) => {
  const data = await UserRepository.handleAuthUser({ email, password });

  return data;
};

/**
 * EXPORTS
 */
export { handleSigninWhithEmailAndPassword };
