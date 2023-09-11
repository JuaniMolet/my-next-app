import { Input, TextField } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField id={'username'} />
    </form>
  );
}

export default LoginPage;
