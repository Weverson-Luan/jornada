import {useState} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-toast-message';
import {handleSigninWhithEmailAndPassword} from 'src/domain/use-cases/user-auth/user-auth-usecases';

import {type IUserLoginViewModel} from './interface';
import {ILoginDTO} from 'src/dtos/user-login';
import {IResultResponseProps} from 'src/dtos/response-api/user-auth';
import {useNavigation} from '@react-navigation/native';

const useLoginViewModel = (): IUserLoginViewModel => {
  const {navigate} = useNavigation();
  const [onFocusedCpf, setOnFocusedCpf] = useState(false);
  const [onFocusedPlate, setOnFocusedPlate] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  /**
   * Realizar autenticação de usuário
   * @param email_and_password
   * @returns IUserLoginResponse
   */

  const onSubmit = async ({email, password}: ILoginDTO) => {
    try {
      setIsLoading(true);
      const {data}: IResultResponseProps =
        await handleSigninWhithEmailAndPassword({email, password});

      if (data.code === 200) {
        Toast.show({
          type: 'success',
          text1: 'Login',
          text2: '✅ Usuário logado com sucesso!',
          props: {uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70'},
        });

        return navigate('HomeView');
      }

      if (data?.code === 401) {
        Toast.show({
          type: 'error',
          text1: 'Login',
          text2: '❌ Error, usuário ou senha inválidos!',
          props: {uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70'},
        });
      }
    } catch (error) {
      // mostrar o toash-message de error
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: '❌ Ocorreu um erro na tentativa de se conectar com o servidor!',
        props: {uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70'},
      });
    } finally {
      setIsLoading(false);
    }
  };
  /**
   * Fechar aplicativo
   */
  const handleCloseApplication = () => {
    BackHandler.exitApp();
  };

  /*
   * DATA BINDING WITH SCRREM
   */
  return {
    isLoading,
    setOnFocusedPlate,
    onFocusedPlate,
    setOnFocusedCpf,
    onFocusedCpf,
    onSubmit,
    handleCloseApplication,
  };
};

/**
 * EXPORTS
 */
export {useLoginViewModel};
