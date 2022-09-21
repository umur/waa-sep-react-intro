
import axios from    "axios"

const listTodos = async () =>{
    let result =  await axios.get("https://jsonplaceholder.typicode.com/todos/");
    return result.data
}
export  { listTodos}
