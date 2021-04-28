import React from 'react';

const AddItem = ({ parent, funcs }) => {
  return (
    <li>
      <button onClick={() => funcs.addChild(parent)} className="add-item"> Add Item</button>
    </li>
  );
}

export default AddItem;