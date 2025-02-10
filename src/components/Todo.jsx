import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
// import { markasDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos= useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    // const mark = useDispatch();

    const clickHandler=(id)=> {
        console.log("delete",id);
        dispatch(deleteTodo(id));
    };
    // const clickDone=(id)=>{
    //     console.log("mark",id);
    //     mark(markasDone(id));
    // }
    return(
        <>
        <AddForm/>
        <h2>Siman Todo List</h2>
        <ul>
            {todos.map((todo)=>(<li key={todo.id}>{todo.task}
                <button onClick= {()=>clickHandler(todo.id)}>Delete</button>
                {/* <button onClick={()=>clickDone(todo.id)}>Done</button> */}
            </li>
        ))}
        </ul>
        </>
    );
}