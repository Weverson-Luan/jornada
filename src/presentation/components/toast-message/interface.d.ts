/**
 * IMPORTS
 */

type ToastMessageCustoProps = {
  text1?: string;
  text2?: string;
  options: "error" | "alert" | "success";
};

type BorderCustomToashProps = {
  options: "error" | "alert" | "success";
};

/**
 * EXPORT
 */
export type { ToastMessageCustoProps, BorderCustomToashProps };