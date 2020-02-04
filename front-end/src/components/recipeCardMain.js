import React from 'react';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const RecipeCardMain = (props) =>{

  return(
    <Card className="recipe-card-main">
      <CardImg top width="100%" src={props.img} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>by:{props.username}</CardSubtitle>
        
        <Button>See It!</Button>
      </CardBody>
    </Card>
)



}

export default RecipeCardMain;
