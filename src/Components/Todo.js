import React from 'react'
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons"

// redux
import { connect, Connect } from 'react-redux'
import {removeTodo} from "../action/todo"


const Todo = ({todos, markComplete}) => {
  return (
    <div>
        <ListGroup className="mt-5 mb-2 items" >
{todos.map(todo=>{
    <ListGroupItem key={todo.id}>
        {todo.title}
        <span className='float-end' onClick={()=> markComplete(todo.id)} ><FaCheckDouble/></span>
    </ListGroupItem>
})}
</ListGroup>
    </div>
  )
}
    const mapStateToProps = state = ({
        todos: state.todos
    })

    const mapDispatchToProps = dispatch=>({
        markComplete: id =>{
            dispatch(removeTodo(id))
        }
    })


export default connect(mapStateToProps, mapDispatchToProps)(Todo)