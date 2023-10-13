import React from 'react';
import Card from 'react-bootstrap/Card'; // Importing Card component from react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup'; // Importing ListGroup component from react-bootstrap
import NameComponent from './Name'; // Importing NameComponent
import ImageComponent from './Image'; // Importing ImageComponent
import DescriptionComponent from './Description'; // Importing DescriptionComponent
import PriceComponent from './Price'; // Importing PriceComponent
import product from './Product'; // Importing Product (assuming it's a data source)
import GreetingComponent from './Greeting'; // Importing GreetingComponent

function CardComponent() {
  return (
    <div>
      {/* Creating Bootstrap Card Component */}
      <Card style={{ width: '18rem', margin: '50px 40px', border: '5px solid black', backgroundColor: 'black', color: 'white' }}>{/* Styling card component */}
        <Card.Img variant="top" src=""></Card.Img>
        <ImageComponent /> {/* Rendering ImageComponent */}
        <Card.Body>
          <Card.Title>{<NameComponent />}</Card.Title> {/* Rendering NameComponent */}
          <Card.Text>
            {<DescriptionComponent />} {/* Rendering DescriptionComponent */}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{<PriceComponent />}</ListGroup.Item> {/* Rendering PriceComponent */}
        </ListGroup>
      </Card>
      <GreetingComponent /> {/* Rendering GreetingComponent */}
    </div>
  );
}

export default CardComponent; // Exporting the CardComponent