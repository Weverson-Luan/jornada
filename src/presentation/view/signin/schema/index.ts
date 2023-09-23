/**
 * IMPORTS
 */
import * as Yup from 'yup';

import { YUP_MESSAGE_ERROR } from '../../../../common/constants';

const userSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, `${YUP_MESSAGE_ERROR.min}`)
    .max(256, `${YUP_MESSAGE_ERROR.max}`)
    .email(`${YUP_MESSAGE_ERROR.invalidEmail}`)
    .required(`${YUP_MESSAGE_ERROR.requeridEmail}`),
  password: Yup.string()
    .min(2, `${YUP_MESSAGE_ERROR.min}`)
    .max(15, `${YUP_MESSAGE_ERROR.max}`)
    .required(`${YUP_MESSAGE_ERROR.requeridPassword}`),
});

const initialValues = {
  email: '',
  password: '',
};

/**
 * EXPORTS
 */
export { userSchema, initialValues };
