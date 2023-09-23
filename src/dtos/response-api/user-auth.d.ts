/**
 * IMPORTS
 */

interface IResultResponseProps {
  data: {
    code: number;
    message: string;
    data?: {
      gr_pessoa_id: number;
      token_auth: string;
      nome: string;
    };
  };
}


/**
 * EXPORTS
 */
export {
  IResultResponseProps
}