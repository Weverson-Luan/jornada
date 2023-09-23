import React from 'react';
import {ToastMessageCustom} from 'src/presentation/components/toast-message/toast-message';

type ToastMessage = {
  props: {
    id: string;
  };
  text1?: string;
  text2?: string;
};

/**
 * Using Toash =>   
 * const handleShowToast = () => (
    Toast.show({
      type: 'alert',
      text1: 'Sucesso',
      text2: '❌ Ocorreu um erro na tentativa de se conectar com o dispositvo!',
      props: { uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70' }
    });
  ) 
 */

const toastConfig = {
  /**
   * Sobrescrever o tipo de 'sucesso',
     modificando o componente `Customizado` existente
   */
  success: ({props, text1, text2}: ToastMessage) => (
    <ToastMessageCustom
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      options="success"
      text1={text1}
      text2={text2}
    />
  ),

  /**
   * Sobrescrever o tipo de 'error',
     modificando o componente `Customizado` existente
   */
  error: ({props, text1, text2}: ToastMessage) => (
    <ToastMessageCustom
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      options="error"
      text1={text1}
      text2={text2}
    />
  ),

  /**
   * Sobrescrever o tipo de 'alert',
     modificando o componente `Customizado` existente
   */
  alert: ({props, text1, text2}: ToastMessage) => (
    <ToastMessageCustom
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      options="alert"
      text1={text1}
      text2={text2}
    />
  ),
};

/**
 * EXPORTS
 */
export {toastConfig};
