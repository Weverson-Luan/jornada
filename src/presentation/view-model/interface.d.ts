/**
 * IMPORTS
 */

import { type ILoginDTO } from 'src/dtos/user-login';

interface IUserLoginViewModel {
  setOnFocusedCpf: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedCpf: boolean;
  setOnFocusedPlate: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedPlate: boolean;
  isLoading: boolean;
  onSubmit: ({ email, password }: ILoginDTO) => void;
  handleCloseApplication: () => void;
}

/**
 * EXPORTS
 */
export type { IUserLoginViewModel };
