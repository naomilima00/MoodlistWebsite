import React from 'react';
import styles from './App.css';

import {Dropdown, ButtonGroup, Button} from 'react-bootstrap';
import SplitButton from 'react-bootstrap/SplitButton';

function Question() {
  
  return (
    <div className="App">
        <div>
            <h1 className="welcome-title">I am feeling</h1>
            <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                __________________
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Happy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Upset</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Relaxed</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          </>
        </div>
    </div>
  );
}

export default Question;
