import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {


  return (
    <div >
      <div className={`text-center py-1 my-1`}>
       
        
      </div>
   
      
      <Link to='/todolist' className='btn btn-primary m-1'>Todo List</Link>
      
    </div>
  )
}

export default Menu