import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { withFormikField } from './withFormikField';

export interface FieldTextProps extends FieldProps {
  required?: boolean;
}

/**
 * Maps a Office UI Fabric React TextField to accept Formik props
 */
export const FieldText = withFormikField((formikProps: FieldTextProps) => {
  const {
    field,
    form: { touched, errors },
    ...rest
  } = formikProps;

  const { name } = field;
  const errorMessage =
    errors[name] && touched[name] ? String(errors[name]) : '';

  return <TextField errorMessage={errorMessage} {...field} {...rest} />;
});
