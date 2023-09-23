/**
 * IMPORTS
 */

// TELA DE LOGIN
const SCREEN_LOGIN = {
  title_journey_control: 'CONTROLE DE JORNADA',
  tileLabelEMAIL: 'E-MAIL',
  tilteLabelPassword: 'SENHA',
  titleButtonLogin: 'ENTRAR',
  titleButtonExitApp: 'SAIR',
};

// TELA HOME

// COMPONENTs
const ACTIVITY_MODAL_COMPONENT = {
  titleConfirmation: 'Confirmação',
  description: 'Deseja realmente alterar a atividade? prara',
  descriptionRest: 'Operação com o veículo.',
  confirmButton: 'CONFIRMAR',
  confirmCancellButton: 'CANCELAR',
};

// VALIDAÇÃO YUP MESSAGE ERROS
const YUP_MESSAGE_ERROR = {
  min: 'Muito curto!',
  max: 'Muito longo',
  requeridEmail: 'E-MAIL  obrigatório!',
  invalidEmail: 'E-MAIL inválido!',
  requeridPassword: 'SENHA obrigatório!',
};

// IMAGES
const IMAGES_JORNADA = {
  LOGO: require('../assets/image/logo.png'),
};

/**
 * EXPORTS
 */
export { SCREEN_LOGIN, ACTIVITY_MODAL_COMPONENT, YUP_MESSAGE_ERROR, IMAGES_JORNADA };
