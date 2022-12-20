import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

  const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'tomar el curso de intro a react', completed: true},
    {text: 'llorar con la cebolla', completed: true},
    {text: 'otro todo', completed: false},
    {text: 'otro todo2222', completed: true}
  ]



function App() {
 


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
