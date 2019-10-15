import { FormikConfig } from 'formik';

export interface IRegisterFormSchema {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterFormProps
  extends Omit<FormikConfig<IRegisterFormSchema>, 'validationSchema'> {}
