import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useLocalStorage from '../localStorage/localStorage';

function LoginForm({values, errors, touched, isSubmitting}) {
  return (
    <div className='container'>
      <Form>
        <div className='form-group'>
          <label>Username</label>
          <Field type='test' className='form-control' name='username' />
          <small className='form-text text-danger'>{touched.username && errors.username}</small>
        </div>
        <div className='form-group'>
          <label>Password </label>
          <Field type='password' className='form-control' name='password' />
          <small className='form-text text-danger'>{touched.password && errors.password}</small>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, 'Name should be atleast 5 character long')
      .max(10, 'Name should be less then 10 character')
      .required('First Name is required'),
    password: Yup.string()
      .min(8)
      .max(15)
      .required('Password is required')
  }),

  handleSubmit: (values, formikBag) => {
    const url = 'http://localhost:5000/api/register';

    axios
      .post(url, values)
      .then(res => {
        console.log(res.data);
        // useLocalStorage('token', res.data.token);
        localStorage.setItem('token', res.data.token);
        formikBag.props.history.push('/profile');
      })
      .catch(err => {
        console.log(err);
      });
  }
})(LoginForm);
