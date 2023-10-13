import React from 'react';
import ImageComponent from './Image'; // Importing ImageComponent
import NameComponent from './Name'; // Importing NameComponent
import DescriptionComponent from './Description'; // Importing DescriptionComponent
import PriceComponent from './Price'; // Importing PriceComponent

// Creating a product object with properties
const product = {
  name: <NameComponent />, // Assigning NameComponent to the 'name' property
  image: <ImageComponent />, // Assigning ImageComponent to the 'image' property
  description: <DescriptionComponent />, // Assigning DescriptionComponent to the 'description' property
  price: <PriceComponent /> // Assigning PriceComponent to the 'price' property
};

export default product; // Exporting the product object