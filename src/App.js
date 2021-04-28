import React, { useState } from 'react';
import TreeList from './components/TreeList';

const baseTree = require('./data.json');

function App() {
  const [tree, setTree] = useState(baseTree);

  const toggleOpen = (item) => {
    const newTree = [...tree];
    item.isOpen = !item.isOpen;
    setTree(newTree);
  };

  //make node folder parent
  const makeParent = (item) => {
    const newTree = [...tree];
    item.children = [];
    setTree(newTree);
  };

  const addChild = (item) => {
    const newTree = [...tree];
    if (!item) {
      newTree.push({ name: 'New Item' });
    } else {
      item.isOpen = true;

      if (item.children === undefined) {
        makeParent(item);
      }
      item.children.push({ name: 'New Item' });
    }
    setTree(newTree);
  };

  const funcs = {
    toggleOpen,
    addChild,
  };

  return (
    <div className="folder-tree-wrapper">
      <h1>Folder Explorer</h1>
      <TreeList tree={tree} funcs={funcs} />
      <button onClick={() => addChild()} className="add-item">
        Add Folder
      </button>
    </div>
  );
}

export default App;
