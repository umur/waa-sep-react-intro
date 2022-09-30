import React from 'react'
import {useNavigate} from "react-router-dom"
import EmployeeService from '../services/EmployeeService';
import { useState, useEffect } from "react";
import Employee from './Employee';


const EmployeeList = () => {
    const navigate=useNavigate();
    const [Employees, setEmployees] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchData=async()=>{
        setloading(true);
try {
    const Response= await EmployeeService.getEmloyees();
    setEmployees(Response.data);
} catch (error) {
    console.log(error);
}
        setloading(false); 
        }
        fetchData();
    }, [])


    
    const deleteEmployee=(e,id)=>{
       

e.preventDefault();

EmployeeService.deleteEmployee(id).then((resp)=>{
    if(Employees){
        setEmployees( (prevElement)=>{
return prevElement.filter((Employee)=>Employee.id !== id)

        });
    }
});

    };
    
  return (

    <div className='container mx-auto my-6'>
    <div className='h-12'>
<button className='rounded text-white bg-slate-600 px-6 py-2 font-semibold'
        onClick={()=>navigate("/AddElement")}>Add Employee</button>
    </div>
    <div className=' flex shadow border-b'>
     <table className='min-w-full'>
        <thead className='bg-gray-50'>
            <tr>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
            </tr>
        </thead>
        {! loading && (
        <tbody className='bg-white'>
            {Employees.map(employee=>
           <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee}></Employee>
            )}
        </tbody>)}
     </table>
    </div>
    </div>
  )
}

export default EmployeeList