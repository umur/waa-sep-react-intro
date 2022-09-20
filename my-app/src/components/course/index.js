import React from "react";

export default function index() {
  return (
    <>
      <p></p>
      <div className="container">
        {/* Content here  */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="index.html" type="button" className="btn btn-primary">Home</a>
          <a href="student.html" type="button" className="btn btn-secondary">Student</a>
        </div>
        <p></p>
        <div>
          <a href="addCourse.html" type="button" className="btn btn-success">Add Course</a>
          <p></p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
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