import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className="todo-list">
      <Header />
      <h2>My ToDo App</h2>
      <MainContent />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <Footer />      
    </div>
  );
}

export default App;
