import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react';
import {Dropdown, ButtonGroup} from 'react-bootstrap';

import Homepage from './Homepage';
import Question from './Question';

function App() {
  return (
    <div className="App">
     {/* <Homepage /> */}
     <Question/>

     
    </div>
  )
}

export default App;
