/**
 * IMPORTS
 */
import React from 'react';
import ModalRN from 'react-native-modal';

// interface
import { type IModalProps } from './interface';

/**
 *
 * Componente Modal para a interação do usuário com ui.
 */
const Modal = ({ isVisible, onClosedModal, children }: IModalProps) => {
  return (
    <ModalRN isVisible={isVisible} onModalHide={onClosedModal} onBackButtonPress={onClosedModal}>
      {children}
    </ModalRN>
  );
};

/**
 * EXPORTS
 */
export { Modal };
