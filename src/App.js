import React from 'react';
import DescriptionComponent from './Components/Description'; // Importing DescriptionComponent
import ImageComponent from './Components/Image'; // Importing ImageComponent
import NameComponent from './Components/Name'; // Importing NameComponent
import PriceComponent from './Components/Price'; // Importing PriceComponent
import product from './Components/Product'; // Importing Product (assuming it's a data source)
import CardComponent from './Components/Card'; // Importing CardComponent
import './App.css';
import Card from 'react-bootstrap/Card'; // Importing Card component from react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup'; // Importing ListGroup component from react-bootstrap
import Nav from 'react-bootstrap/Nav'; // Importing Nav component from react-bootstrap
import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap
import NavbarComponent from './Components/Navbar'; // Importing NavbarComponent

const App = () => {
  return (
    <div>
      {/* Rendering the NavbarComponent */}
      <NavbarComponent />

      {/* Rendering the CardComponent */}
      <CardComponent
        image={<ImageComponent />} // Rendering ImageComponent as a prop
        name={<NameComponent />} // Rendering NameComponent as a prop
        description={<DescriptionComponent />} // Rendering DescriptionComponent as a prop
        price={<PriceComponent />} // Rendering PriceComponent as a prop
      />
    </div>
  );
};

export default App;