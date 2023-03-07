import React from 'react';

function Block({ block }) {
  return (
    <div>
      <h2>Block #{block.index}</h2>
      <p>Data: {block.data}</p>
      <p>Timestamp: {block.timestamp}</p>
      <p>Hash: {block.hash}</p>
      <p>Previous Hash: {block.previousBlockHeaderHash}</p>
    </div>
  );
}

export default Block;
