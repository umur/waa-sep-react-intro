import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';

import User from './User';
import Users from './Users';
import CreateUser from './CreateUser';
import CreateProduct from './CreateProduct';
import Products from './Products';
import Todos from './Todos';
import axios from 'axios';
import TodoDetail from './TodoDetail';
import Counter from './Counter'
//import A from "./A"
// export const instance =axios.create({
//   baseURL: 'http://localhost:8083',
//   headers:{
//       Authorization : 'Bearer token'
//   }
// });
import {store} from './redux/store'
//export const LangContext = createContext();
function App() {

  return(
    <Provider store={store}>
      <div className='App'>
        <Counter/>
      </div>
    </Provider>


  )



  //  const [langState,setLangState] = useState({lang:'EN'});


  // return (
  //   <div>
  //     <LangContext.Provider value={langState.lang}>
  //     <A />
  //     </LangContext.Provider>
  //   </div>
  // );



  // const productsInitialState = [
  //   {
  //     "id": 1,
  //     "name": "dummy",
  //     "price": 1.0,
  //     "rating": null,
  //     "category": {
  //       "id": 1,
  //       "name": "Dummy Category"
  //     }
  //   }
  // ];

  // const [productsState, setProductsState] = useState(productsInitialState);

  // const getProducts = async () => {
  //   const result = await axios.get("http://localhost:8083/products/");
  //   setProductsState(result.data);
  //   console.log(">>>>>>>>>>>>>>>>>>>>>")
  //   console.log(result.data)
  //   console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
  // }


  // const initialState = [
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": false
  //   }
  // ]
  // const [todosState, setTodosState] = useState(initialState);

  // const getTodos = async () => {
  //   const result = await axios.get("https://jsonplaceholder.typicode.com/todos/")
  //   setTodosState(result.data.slice(0, 5));
  // }

  // useEffect(() => {
  //   getProducts();
  //   getTodos();
  // }, [])

  // const [selectedTodoId, setSelectedTodoId] = useState(1);

  // return (
  //   <div>

  //     <Products products={productsState} />

  //     {/* <Todos
  //       todos={todosState}
  //       setSelectedTodoId={setSelectedTodoId}
  //     /> */}

  //     {/* <TodoDetail selectedTodoId={selectedTodoId} /> */}

  //   </div>
  // )



  /*  
  const usersInitialState =[
    {id:1, firstname:'Abedur', lastname:'Rahman', email:'abedur@gmail.com', password: 123, address:'1'},
    {id:2, firstname:'Adyan', lastname:'Rahman', email:'adyan.eit@gmail.com', password: 123, address:'1'}
  ]
  let [usersState, setUsersState] = useState(usersInitialState);
  
  
  const getUsers = async ()=>{
    const result = await instance.get('/users');
    setUsersState(result.data)
  }
  
  useEffect(()=>{
    getUsers();
  },[])
  
  const productsInitialState =[
    {id:1, name:'iPhone', category:'Electronics', price:12000, rating: 5},
    {id:2, name:'iPad', category:'Electronics', price:800, rating: 4}
  ]
  let [productsState, setProductsState] = useState(productsInitialState);
  
  
    return (
      <div className="App">
        <h3>Create User:</h3>
        <CreateUser />
        <h3>Users:</h3>
        <Users users ={usersState}/>
  
        <h3>Create Product:</h3>
        <CreateProduct />
  
        <h3>Products:</h3>
        <Products products={productsState} />
  
      </div>
    );
    */

}

export default App;
