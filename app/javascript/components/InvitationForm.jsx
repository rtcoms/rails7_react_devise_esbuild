import *  as React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createInvitation} from "../services/apiService";

const validationSchema = yup.object({
  invitee_email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

const InvitationForm = () => {

  const handleSubmit = (values) => {

    console.log('INITIATE INVITE CREATION REQUEST', values);

    createInvitation(values).then(res => {
      console.log('INVITATION CREATED', res);
    })
  };

  const formik = useFormik({
    initialValues: { invitee_email: ''},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try { handleSubmit(values);} catch (error) { console.log(error);}
    }

  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="invitee_email"
          name="invitee_email"
          label="Invitee Email"
          value={formik.values.invitee_email}
          onChange={formik.handleChange}
          error={formik.touched.invitee_email && Boolean(formik.errors.invitee_email)}
          helperText={formik.touched.invitee_email && formik.errors.invitee_email}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default InvitationForm;