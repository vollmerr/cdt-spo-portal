import { FormikConfig } from 'formik';

export interface ILoginFormSchema {
  email: string;
  password: string;
}

export interface ILoginFormProps
  extends Omit<FormikConfig<ILoginFormSchema>, 'validationSchema'> {}
