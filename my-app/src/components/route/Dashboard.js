import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Login from ".";
import ProductDetails from "./ProductDetails";
import Products from "./Products";

export default function Dashboard() {

  return (
    <div>
      Choose One
      <div className="container">

        {/* Content here */}
        {/* <a href="course.html" type="button" className=""="btn btn-primary btn-lg btn-block">Course</a> */}
        {/* <a href="student.html" type="button" className=""="btn btn-secondary btn-lg btn-block">Student</a> */}
        
        <Link to="/course" type="button" className="btn btn-primary btn-lg btn-block">Course</Link>
        <Link to="/student" type="button" className="btn btn-info btn-lg btn-block">Student</Link>

      </div>


    </div>
  )
}