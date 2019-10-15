import { FormikConfig } from 'formik';

export interface IForgotPasswordFormSchema {
  email: string;
}

export interface IForgotPasswordFormProps
  extends Omit<FormikConfig<IForgotPasswordFormSchema>, 'validationSchema'> {}
