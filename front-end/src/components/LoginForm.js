import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import styled from "styled-components";



const LoginFormWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

function LoginForm({ values, errors, touched, isSubmitting }) {
    return (
        <Form>
            <LoginFormWrapper>
                <UsernameField>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="text" name="username" placeholder="Username" />
                </UsernameField>
                <PasswordField>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </PasswordField>
                <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            </LoginFormWrapper>
        </Form>
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
            .min(10, "Username is not valid")
            .required("Username is required"),
        password: Yup.string()
            .min(10, "Password must be 10 chracters or longer")
            .required("Password is required")
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.username === "alreadytaken@atb.dev") {
            setErrors({ username: "That username is already taken" });
        } else {
            axios
                .post("https://INSERT-HERE.com", values)
                .then(res => {
                    console.log(res);
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); // There was an error creating the data and logs to console
                    setSubmitting(false);
                });
        }
    }
})(LoginForm);


export default FormikLoginForm;