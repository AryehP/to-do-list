import React from 'react';
import TodoItems from './TodoItems';

function TodoList({items}) {
  return (<div className='TodoList'>
      

       {items.map(items => <TodoItems text = {items.text} complete = {items.complete} />)}
        
        
  </div>);
}

export default TodoList;
