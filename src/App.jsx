import { Routes, Route } from "react-router-dom"
// import Texto from "./components/Texto"

import Menu from "./components/Menu";

import TodoList from "./components/TodoList";


import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return ( 
   
      <div className={`container-fluid p-3 d-flex flex-row`}>
        <Menu/>
        <div className="container">
          <Routes>
            
            <Route path='/todolist' element={<TodoList />}/>
           
          </Routes>
        </div>
      </div>

  )
}

export default App;