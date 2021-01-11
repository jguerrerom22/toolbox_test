import './App.css';
import React, { useState } from 'react';
import { Navbar, Form, Badge, FormControl, Button, Card, ListGroup } from 'react-bootstrap'

function App() {

  const [search, setSearch] = useState('');
  const [texts, setTexts] = useState([]);

  const searchText = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/iecho?text=${search}`);
      const data = await response.json();
      setTexts([{ text: data.text, palindromo: data.palindromo }, ...texts]);
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <Navbar bg="danger" variant="dark">
        <Form inline onSubmit={(e) => searchText(e)}>
          <FormControl type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="mr-sm-2" />
          <Button onClick={searchText} variant="primary">Send</Button>
        </Form>
      </Navbar>
      <div class="p-3">
        <Card>
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <ListGroup ListGroup variant="flush">
            {texts.map(text => (
              <ListGroup.Item>
                {text.text} 
                {text.palindromo ?
                  <Badge variant="warning">Palindromo</Badge>
                  : <></>
                }
              </ListGroup.Item>
            ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  );
}

export default App;
