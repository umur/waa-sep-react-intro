import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Category from './Category';
function Categories() {
const[categories,setCategories] = useState([]);
useEffect(()=>{
    axios.get("/category")
         .then((response)=>{ console.log(response.data)
                        setCategories(response.data)
        })    

},[])

  return (
    <div>
      {categories.map((category)=>{
        return(
        <Category 
            {...category}
        />
      )})

      }
    </div>
  )
}

export default Categories
