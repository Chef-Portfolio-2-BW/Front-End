import React, { useEffect, useState } from "react";

import { axiosWithAuth } from './axiosAuth';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { Link } from 'react-router-dom';

const UpdateForm = (props) => {
  const [name, setName] = useState('');

  const [instructions, setInstructions] = useState('');
  const [img, setImg] = useState();

  const { values, touched, errors } = props;

  useEffect(()=>{
    axiosWithAuth()
      .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}`)
      .then(res => {
        setImg(res.data.img);
        console.log('recipe data:', res.data);
        axiosWithAuth()
          .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}/instructions`)
          .then(res=>{
            console.log("instructions:", res.data);
            setInstructions(res.data);


            })
          .catch(err=>console.log("instructions detail error:", err))

        })
      .catch(err => console.log(err))


  }, [])


  const handleSubmit = event => {
    event.preventDefault();
    let update = { name: values.name, img: values.img, ingredients: values.ingredients, instructions: values.instructions, category: parseInt(values.category)}
    axiosWithAuth()
      .put(`https://bwchefhub.herokuapp.com/api/recipes/${props.id}`, update)
        // https://bwchefhub.herokuapp.com/api/recipes/:id
      .then(res => {
        console.log(res)
        props.history.push('/profile');
      })
      .catch(err => {
        console.log(err);
      });
    console.log(update);
  };

  return (
    <div className="main account2">
      <section>
        <h1>Update Recipe</h1>
        <div className="form-container">

          <Form onSubmit={handleSubmit}>
            <span className='form-align'>Recipe Name:</span><br />
            <Field
              type="text"
              name="name"
              placeholder={props.name}
              value={values.name}
            />
            {touched.name && errors.name && <p color="danger">{errors.name}</p>}
            <br />
            <br />
            <span className='form-align'>Image Location:</span><br />
            <Field
              type="text"
              name="img"
              placeholder={img}
              value={values.img}
            />
            {touched.img && errors.img && <p color="danger">{errors.img}</p>}
            <br />
            <br />
            <Field
              as="select"
              name="category"
              placeholder="Which Meal?"
              value={values.category}>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
              <option value="4">Snack</option>
            </Field>
            {touched.img && errors.img && <p color="danger">{errors.img}</p>}
            <br />
            <br />
            <span className='form-align'>Ingredients:</span><br />
            <Field
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={values.ingredients}
            />
            {touched.ingredients && errors.ingredients && <p color="danger">{errors.ingredients}</p>}
            <br />
            <br />
            <span className='form-align'>Instructions:</span><br />
            <Field
              type="text"
              name="instructions"
              placeholder={instructions.step}
              value={values.instructions}
            />
            {touched.instructions && errors.instructions && <p color="danger">{errors.instructions}</p>}
            <br />
            <br />

            <button>Update</button>
            <br />
            <br />
          </Form>
        </div>
      </section>
    </div>
  );
};

const EnchanedUpdateForm = withFormik({
  mapPropsToValues: ({ name, img, ingredients, instructions}) => ({
    name: name || "",
    img: img || "",
    ingredients: ingredients || "",
    instructions: instructions || "",

  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Recipe name must be longer than 2 symbols!')
      .max(20, 'Recipe name must be shorter than 20 symbols!')
      .required('Recipe name is requred'),

    img: Yup.string()
      .required('Image is required!'),

    ingredients: Yup.string()
      .min(2, 'Ingredients must be longer than that!')
      .required('Ingredients are required!'),

    instructions: Yup.string()
      .min(2, 'Instructions must be longer than that!')
      .required('Instructions are required'),

  })
})(UpdateForm);

const UpdateRecipe = (EnchanedUpdateForm);

export default UpdateRecipe;
