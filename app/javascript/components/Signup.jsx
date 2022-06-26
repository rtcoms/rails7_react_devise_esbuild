import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {

    console.log('INITIATE REG REQUEST', values);

    register({user: values}).then(res => {
      console.log('REGISTER RESPONSE', res);
      console.log('REGISTER RESPONSE', res.data);
      console.log('REGISTER HEADER', res.headers);
      const jwtToken = res.headers.authorization.split(' ')[1];
      console.log('REGISTER TOKEN', jwtToken);
      window.localStorage.setItem("token", jwtToken);

      // redirect to root using react router dom
      navigate("/", {});
    })
  };

  const formik = useFormik({
    initialValues: { email: '',  password: '',},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        handleSubmit(values);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
