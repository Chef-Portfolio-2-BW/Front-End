import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { Link } from 'react-router-dom';

const NewAccountForm = (props) => {

  const { values, touched, errors } = props;

  const handleSubmit = event => {
    event.preventDefault();
    let userAuth = { username: values.username, password: values.password, email: values.email}
    axios
      .post('https://bwchefhub.herokuapp.com/api/auth/register', userAuth)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
    console.log(userAuth);
  };

  return (
    <div className="main">
      <section>
        <h1>Create a New Account</h1>
        <div className="form-container">

          <Form onSubmit={handleSubmit}>
            <span className='form-align'>Username:</span><br />
            <Field
              type="text"
              name="username"
              placeholder="username"
              value={values.username}
            />
            {touched.username && errors.username && <p color="danger">{errors.username}</p>}
            <br />
            <br />
            <span className='form-align'>Password:</span><br />
            <Field
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
            />
            {touched.password && errors.password && <p color="danger">{errors.password}</p>}
            <br />
            <br />
            <span className='form-align'>Email:</span><br />
            <Field
              type="text"
              name="email"
              placeholder="email"
              value={values.email}
            />
            {touched.email && errors.email && <p color="danger">{errors.email}</p>}
            <br />
            <br />

            <button>Sign Up</button>{' '}
            <br />
            <br />
          </Form>
        </div>
      </section>
    </div>
  );
};

const EnchanedNewAccountForm = withFormik({
  mapPropsToValues: ({ username, password, email }) => ({
    username: username || "",
    password: password || "",
    email: email || "",

  }),

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(20, 'Username must be shorter than 20 symbols!')
      .required('Username is requred'),

    password: Yup.string()
      .min(2, 'Invalid Password')
      .max(10, 'Password must be shorter than 10 symbols')
      .required('Password is required!'),

    email: Yup.string()
      .min(2, 'Invalid email')
      .max(30, 'Email must be shorter than 30 symbols')
      .required('Email is required!'),

  })
})(NewAccountForm);

const NewAccount = (EnchanedNewAccountForm);

export default NewAccount;
