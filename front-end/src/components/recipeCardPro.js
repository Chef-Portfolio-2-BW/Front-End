import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth.js';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const RecipeCardPro = (props) =>{


  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  const click = () =>{
    props.setSelection(props.currentUser.name)
    props.history.push(`/recipes/${props.id}`);
  }

  const edit = () =>{
    props.setSelection({name:props.name, id:props.mealId});
    props.history.push(`/edit/${props.id}`);
  }

  const deleteMe = () =>{
    console.log(`Im deleted`, props.id);
    axiosWithAuth()
      .delete(`https://bwchefhub.herokuapp.com/api/recipes/${props.id}`)
        .then(res => {
          console.log('The Recipe is gone!');
          cancel();
          axiosWithAuth()
            .get('https://bwchefhub.herokuapp.com/api/recipes/myrecipes')
            .then(res=>props.setRecipeList(res.data))
            .catch(err=>console.log("Update error:", err))
          // window.location.reload(false);
        })
        .catch(err=>console.log('DELETE ERROR: ', err));
  }

  const cancel = ()=>{
    setModal(!modal);
  }



  return(
    <Card className="recipe-card-main">
      <div className='card-img-container'>
        <CardImg top width="100%" src={props.img} alt={props.name} />
      </div>
      <CardBody>
        <div className='card-container'>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>By: {props.username}</CardSubtitle>
          <Button onClick={()=>click()}>View Details</Button>
          <Button onClick={()=>edit()}>Edit</Button>
          <Button className='delete-me' onClick={toggle}>Delete</Button>

          <div id='confirm-box' className={`modal ${modal ? 'on' :""}`}>
            <div className="modal-header">
              <span className="close" onClick={cancel} >&times;</span>
              <h2>DELETE</h2>
            </div>
            <div className="modal-body">
              <p>You are about to <span>DELETE</span> {props.name}!</p>
              <p>This will permanently <span>DELETE</span> this recipe</p>
              <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
              <Button className='delete-me' onClick={deleteMe}>DELETE IT!</Button>
              <Button onClick={cancel}>Cancel</Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
)



}

export default RecipeCardPro;
