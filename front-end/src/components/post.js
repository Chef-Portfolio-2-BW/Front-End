import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosAuth";

import "./post.css";

class Post extends React.Component {
  state = {
    recipe: {
      name: "",
      category: "1",
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
      value: e.target.value,
      isFetching: true
    });
    //axios goes here
    console.log("first", this.state.recipe);
    axiosWithAuth()
      .post("https://bwchefhub.herokuapp.com/api/recipes", this.state.recipe)
      .then(res => {
        console.log(res.data);
        // this.setState({ recipe: [...res.data, res.data.payload] });
        this.props.history.push("/profile");
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

          <select category={this.state.category}>
            <option category="1">Breakfast</option>
            <option category="2">Lunch</option>
            <option selected category="3">
              Dinner
            </option>
            <option category="4">Snack</option>
            value={this.state.recipe.category}
            name="category" onChange={this.handleChange}
          </select>

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
