import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosAuth";

import "./post.css";

class Post extends React.Component {
  state = {
    recipe: {
      name: "",
      catagory: "",
      img: "",
      ingredients: "",
      instructions: ""
    },
    isFetching: false
  };

  handleChange = e => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [e.target.name]: e.target.value
      }
    });
  };

  post = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    });
    //axios goes here
    console.log(this.state);
    axiosWithAuth
      .post("https://bwchefhub.herokuapp.com/api/recipies", this.state)
      .then(res => {
        console.log(res.data);
        this.setState({ recipe: [...res.data, res.data.payload] });
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="postWrap">
        <h1>Enter all the details for your recipe</h1>
        <form className="formStyle" onSubmit={this.post}>
          <input
            type="text"
            name="name"
            placeholder="Recipie Name"
            value={this.state.recipe.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="catagory"
            placeholder="Catagory"
            value={this.state.recipe.catagory}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="img"
            placeholder="Image Link"
            value={this.state.recipe.img}
            onChange={this.handleChange}
          />

          <input
            type="textarea"
            name="ingredients"
            placeholder="Ingredients"
            value={this.state.recipe.ingredients}
            onChange={this.handleChange}
          />

          <input
            type="textarea"
            name="instructions"
            placeholder="Instructions"
            value={this.state.recipe.instructions}
            onChange={this.handleChange}
          />

          <button> Post </button>
        </form>
      </div>
    );
  }
}
export default Post;
