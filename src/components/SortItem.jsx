import React , {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const SortItem = ({ tree, funcs }) => {
  const [orderBool, setOrderBool] = useState(false);
  const { updateTree } = funcs;

  const compareValues = (key, order = 'asc') =>
    function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };

  const sort = (key) => {
    setOrderBool(!orderBool);
    const newTree = [...tree];
    newTree.sort(compareValues(key, orderBool ? 'asc' : 'desc'));
    updateTree(newTree);
  };
  return (
   <div style={{textAlign: 'right'}}>
      <a href=".#" className="btn-primary" onClick={() => sort('name')}>
        Sort by name{' '}
        <FontAwesomeIcon icon={faSort } />
      </a> 
   </div>
  );
}

export default SortItem;

