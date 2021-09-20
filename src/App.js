import React from 'react';
import { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import Info from './Info';


const App = () => {
  const [visible, setVisible ] = useState(false);
  return (
    <Info />
  )
}




export default App;
