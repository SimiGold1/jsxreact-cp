import React from 'react';
import ImageComponent from './Image'
import NameComponent from './Name';
import DescriptionComponent from './Description';
import PriceComponent from './Price';

const product =  {
  name: <NameComponent />,
  image: <ImageComponent />,
  description: <DescriptionComponent />,
  price: <PriceComponent />
  };
  
  
  export default product;