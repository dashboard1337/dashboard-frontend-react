import './styles/App.css';
import React from 'react';
import Task from "./components/Task";
import Sidebar from "./components/Sidebar";
import Block from "./components/Block";

function App() {
  return (
      <>
        <Sidebar></Sidebar>
        <Block></Block>
          <Task></Task>
      </>
  );
}

export default App;
