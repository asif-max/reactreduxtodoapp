<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todo from "./Todo";
const App = () => {
  return (
    <Provider store={store}>
       <Todo /> 
    </Provider>
  );
};
export default App;
>>>>>>> 1e90826af9248c61c21277f224ea0f558573c791
