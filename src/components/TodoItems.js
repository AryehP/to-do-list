import React from 'react';

function TodoItems({text, complete}) {
  return (<div className='TodoItems'>

      <label>{text}</label>
      <input type='checkbox' checked={complete}></input>

  </div>);
}

export default TodoItems;
