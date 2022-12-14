import React from "react";
import Login from "./Login";

const Index = () => {

    return (
        <>
            <p></p>
            <div className="container">
                {/* Content here> */}

                {/* <a href="course.html" type="button" class="btn btn-primary btn-lg btn-block">Course</a> */}
                {/* <a href="student.html" type="button" class="btn btn-secondary btn-lg btn-block">Student</a> */}
                <p>Click Below to Login</p>
                <a href="login.html" type="button" className="btn btn-primary btn-lg btn-block">Login</a>

                <Login />

            </div>
        </>
    )
}

export default Index;