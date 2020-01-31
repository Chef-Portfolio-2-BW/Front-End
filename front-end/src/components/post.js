import React, { useState, useEffect } from "react";
import axios from "axios";

class Post extends React.Component {
  state = {
    recipe: {
      name: "",
      catagory: "",
      img: "",
      ingredients: "",
      directions: ""
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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.post}>
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
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={this.state.recipe.ingredients}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="directions"
            placeholder="Directions"
            value={this.state.recipe.directions}
            onChange={this.handleChange}
          />

          <button> Post </button>
        </form>
      </div>
    );
  }
}
export default Post;
