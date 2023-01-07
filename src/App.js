import React from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";

//redux stuff

import {Provider} from "react-redux"
//import store from redux
import store from "./store";



function App() {
  return (
   <Provider store={store} >
    <Container fluid>
      <Todo/>
      <TodoForm/>
    </Container>
   </Provider>
  );
}

export default App;
