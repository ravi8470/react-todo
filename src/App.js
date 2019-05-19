import React,{ useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import AddTodo from './components/addTodo';
import ShowTodos from './components/showTodos';
function App() {
  const [todoList, setTodoList] = useState([]);
  const saveTodox = (todoText) =>{
    if(todoText.trim().length > 0){
      setTodoList([...todoList,todoText.trim()]);
    }
  }
  const deleteItem = (index) => {
    const newList = todoList.filter( (item, ind) => index !== ind)
    setTodoList(newList);
  }
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <AddTodo  saveTodo={(text) => saveTodox(text)}/>
      <ShowTodos todoList={todoList} deleteTodo={(index) => deleteItem(index)}/>
    </div>
  );
}

export default App;
