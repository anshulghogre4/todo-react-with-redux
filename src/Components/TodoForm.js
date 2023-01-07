import React,{useState}from 'react'
import {Container,Input,Button,Form,InputGroup} from "reactstrap"
import { v4 } from 'uuid'

//redux stuff
import { connect, Connect } from 'react-redux'
import {addTodo} from "../action/todo"






const TodoForm = ({addTodo}) => {

 const [title, setTitle] = useState('');
 
 const handleSubmit =(e)=>{

    e.preventDefault();
    if (title === "") {
        return alert("please enter a todo");
    }

    const todo = {
        title,
        id: v4(),
    }

    addTodo(todo);

    console.log(todo)
    setTitle("");


}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
    <InputGroup>
    <Input type="text" name="todo" id="todo" placeholder="Enter a todo"
    value={title}  onChange={(e)=> setTitle(e.target.value)}   />
    <Button onClick={handleSubmit} color="success" >
        Add Todo
    </Button>
    </InputGroup>
   </Form>
    </div>
  )
}


const mapStateToProps = state =>({})

const  mapDispatchToProps = dispath =>({
        addTodo:todo=>{
           dispath(addTodo(todo));
        },
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm); // TODO connect with redux