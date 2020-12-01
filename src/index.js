import { Todo } from './classes/todo.class.js';
import { saludar } from './js/componentes.js';
//import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
//const tarea = new Todo('Aprender javascript!!');
//todoList.nuevoTodo( tarea );
//tarea.completado = false;
//console.log(todoList);

//crearTodoHtml(tarea);
console.log(todoList.todos);
todoList.todos.forEach(todo => crearTodoHtml( todo ));

console.log('todos', todoList.todos);