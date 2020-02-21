import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
    label = {label}
    helperText={touched && error}
    error={touched && (error ? true : false)}
    variant="outlined"
    fullWidth
    {...input}
    {...custom}
    />
  );
export default renderField