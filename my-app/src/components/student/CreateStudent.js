import React from "react";

export default function CreateStudent() {

  const submit = () => {
    alert("submit");
  }

  return (
    <>
      <p></p>
      <div className="container">
        {/*  Content here  */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="index.html" type="button" className="btn btn-success">Home</a>
          <a href="course.html" type="button" className="btn btn-primary">Course</a>
          <a href="student.html" type="button" className="btn btn-secondary">Student</a>
        </div>
        <p>Add Student</p>
        <hr />
        <form>
          <div className="form-group">
            <label>ID</label>
            <input type="number" className="form-control" id="id" placeholder="Enter ID" />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Major</label>
            <input type="text" className="form-control" id="major" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input type="number" step="0.01" className="form-control" id="major" placeholder="Enter GPA" />
          </div>
          <a onClick={submit} type="button" className="btn btn-success">Submit</a>
        </form>
      </div>
    </>
  )
}