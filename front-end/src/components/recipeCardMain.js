import React from 'react';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const RecipeCardMain = (props) =>{

  // console.log("card props: ", props)
  let click= () =>{
    props.setSelection(props.username);
    props.history.push(`/recipes/${props.id}`);
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
        <Button onClick={()=>click()}>See It!</Button>
        </div>
      </CardBody>
    </Card>
)



}

export default RecipeCardMain;
