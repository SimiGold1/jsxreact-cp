import React from 'react'
import DescriptionComponent from './Components/Description'
import ImageComponent from './Components/Image'
import NameComponent from './Components/Name'
import PriceComponent from './Components/Price'
import product from './Components/Product'
import CardComponent from './Components/Card';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './Components/Navbar'

const App =() => {
  return (
    <div>
      <NavbarComponent />
    <CardComponent
     image={<ImageComponent />}
        name={<NameComponent />}
        description={<DescriptionComponent />}
        price={<PriceComponent />}
      />
    </div>
  );
};

export default App;