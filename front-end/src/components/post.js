import React, { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  id: "",
  name: "",
  chef: "",
  ingredience: "",
  directions: ""
};

const CreatePost = props => {
  const [update, setUpdate] = useState(initialState);

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
  //       .then(response => setUpdate(response.data))

  //       .catch(error => console.log(error));
  //   }, [props.match.params.id]);

  //   const changeHandler = e => {
  //     setUpdate({ ...update, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();

  //     axios
  //       .put(`http://localhost:5000/api/movies/${update.id}`, update)
  //       .then(response => {
  //         props.history.push(`/movies/${update.id}`);
  //       })
  //       .catch(err => console.log(err));
  //   };

  return (
    <div>
      <form>
        <input
          type="text"
          name="recipie name"
          placeholder="Recipie Name"
          value={update.name}
        />

        <input
          type="text"
          name="name"
          placeholder="Chef Name"
          value={update.chef}
        />

        <input
          type="text"
          name="ingredience"
          placeholder="Ingredience"
          value={update.ingredience}
        />

        <input
          type="text"
          name="directions"
          placeholder="Directions"
          value={update.directions}
        />

        <button> Post </button>
      </form>
    </div>
  );
};
export default CreatePost;
