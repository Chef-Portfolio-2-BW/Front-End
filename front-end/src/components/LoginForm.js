import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";

import styled from "styled-components";
import { axiosWithAuth } from './axiosAuth.js';


const LoginFormWrapper = styled.div`
    /* display: flex; */
    /* justify-content: flex-end; */
    /* align-items: center; */
    padding: 1.5rem;
    background-color: black;
`

const UsernameField = styled.div`
    color: white;
    margin-left: 1rem;
`

const PasswordField = styled.div`
    color: white;
    margin-left: 1rem;
`

const SubmitButton = styled.button`
    padding:5px 15px;
    background-color:#fd9827;
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-left: 1rem;
`


const LoginForm = (props) => {

  const {values, errors, touched, isSubmitting } = props;

  const handleSubmit = (event) => {
    let login = ({username:values.username, password:values.password})
    event.preventDefault();
      axiosWithAuth()
        .post("https://bwchefhub.herokuapp.com/api/auth/login", values)
        .then(res => {
            console.log(res.data);

            localStorage.setItem('token', res.data.token);
            props.setCurrentUser({name:values.username, loggedIn:true})
            props.history.push('/profile');

        })
        .catch(err => {
            console.log(err); // There was an error creating the data and logs to console

        });
    }


    return (
      <div className='main'>
        <Form onSubmit={handleSubmit}>
            <LoginFormWrapper>
              <h2>Login</h2>
                <UsernameField>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="text" name="username" placeholder="Username" />
                </UsernameField>
                <PasswordField>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </PasswordField>
                <br />
                <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            </LoginFormWrapper>
        </Form>
      </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .max(20, "Username is not valid")
            .required("Username is required"),
        password: Yup.string()

            .min(8, "Password must be 10 chracters or longer")
            .max(15, "Password is too long")
            .required("Password is required")
    }),

}
)(LoginForm);



export default FormikLoginForm;
