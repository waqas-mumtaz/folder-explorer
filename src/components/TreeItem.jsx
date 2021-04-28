import React from 'react';
import TreeList from './TreeList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen,faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TreeItem = ({ item, funcs }) => {
  const { toggleOpen, addChild } = funcs;

  return (
    <li className={item.isOpen ? "expanded" : ''} key={item.id}>
    <FontAwesomeIcon icon={item.isOpen ? faFolderOpen : faFolder } onClick={() => toggleOpen(item)}/>
<div>
{item.name}
<span onClick={() => addChild(item)} className="plus-btn">+</span>
{item.children && <div className="arrow" onClick={() => toggleOpen(item)}> <FontAwesomeIcon icon={faAngleDown} /></div>}
</div>
{item.children && item.isOpen && (
<TreeList  tree={item.children} funcs={funcs} />
)}
</li> 
  );
}

export default TreeItem;

