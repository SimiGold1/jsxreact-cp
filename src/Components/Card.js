import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NameComponent from './Name';
import ImageComponent from './Image';
import DescriptionComponent from './Description';
import PriceComponent from './Price';
import product from './Product';
import GreetingComponent from './Greeting';

function CardComponent() {
  return (
    <div>
    <Card style={{ width: '18rem', margin: '50px 40px', border: '5px solid black', backgroundColor: 'black', color: 'white'}}>
      <Card.Img variant="top" src=" " ></Card.Img>
      <ImageComponent />
      <Card.Body>
        <Card.Title>{<NameComponent/>}</Card.Title>
        <Card.Text>
          {<DescriptionComponent />}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{<PriceComponent />}</ListGroup.Item>
      </ListGroup>
    </Card>
    <GreetingComponent />
    </div>
  );
}


export default CardComponent;
