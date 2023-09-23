/**
 * IMPORTS
 */

import AxiosService from '../../infra/http/axios/api-axios';
import {type ILoginDTO} from '../../model/user';

// autenticação de usuário
const handleAuthUser = async ({email, password}: ILoginDTO) => {
  const Instance = AxiosService.createAxiosInstance();

  const responseAuth = await (
    await Instance
  ).post(
    `login`,
    {
      email,
      password,
    },
    {
      headers: {'content-type': 'application/json'},
    },
  );
  return responseAuth;
};

const UserRepository = {
  handleAuthUser,
};

/**
 * EXPORTS
 */
export {UserRepository};
