import React from 'react';
import TreeItem from './TreeItem';

const TreeList = ({tree, funcs }) => {
  return (
    <ul className="folder-tree">
      {tree.map((child) => (
        <TreeItem item={child} funcs={funcs} key={child.id}/>
      ))}
    </ul>
  );
}

export default TreeList;