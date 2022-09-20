import React from "react";

export default function index(){
return(
    <>
    <p></p>
  <div className="container">
    {/* Content here  */}
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <a href="index.html" type="button" className="btn btn-primary">Home</a>
      <a href="course.html" type="button" className="btn btn-secondary">Course</a>
    </div>
    <p></p>
    <div>
      <a href="addStudent.html" type="button" className="btn btn-success">Add Student</a>
      <p></p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Major</th>
            <th scope="col">GPA</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="insertHere">
        
        </tbody>
      </table>
    </div>
  </div>
    </>
)

}