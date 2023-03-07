import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Block from './Block';
import { addBlock, getLatestBlock } from './Blockchain';

function App() {
  const [data, setData] = useState('');
  const [blocks, setBlocks] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const block = await addBlock(data);
    setBlocks(blocks => [...blocks, block]);
    setData('');
  }


useEffect(() => {
  async function fetchLatestBlock() {
    const block = await getLatestBlock();
    setBlocks([block]);
  }
  fetchLatestBlock();
}, []);

return (
  <Container>
    <h1>Blockchain App</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicData">
        <Form.Label>Data</Form.Label>
        <Form.Control type="text" placeholder="Enter data" value={data} onChange={event => setData(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Block
      </Button>
    </Form>
    {blocks.map(block => <Block key={block.index} block={block} />)}
  </Container>
);

}
export default App;