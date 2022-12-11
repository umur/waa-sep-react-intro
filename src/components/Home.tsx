import * as React from 'react';
import {useEffect, useState} from "react";
import AddCourse from "./courses/AddCourse";
import CourseList from "./courses/CourseList";
import AddStudent from "./students/AddStudent";
import StudentList from "./students/StudentList";
import axios from "axios";
import {BASE_URL} from "../utils/GlobalConstants";
import {ICourse} from "../models/ICourse";
import {IStudent} from "../models/IStudent";
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";

interface Props {
}

const Home: React.FC<Props> = (props) => {

    return (
        <>
            <div style={{display: "flex", fontSize: "3em", justifyContent: "space-around"}}>
                <Link to={'/'}>Courses</Link>
                <Link to={'/students'}>Students</Link>
            </div>
            <div style={{width: "75%", margin: "0 auto"}}>
                <div style={{border: "1px solid #ccc", borderRadius: "5px", padding: "50px 20px", margin: "50px 0", boxShadow: "10px 10px #eee"}}>
                    <Routes>
                        <Route path={''} element={<CourseList/>}/>
                        <Route path={'/courses/add'} element={<AddCourse/>}/>
                        <Route path={'/students'} element={<StudentList/>}/>
                        <Route path={'/students/add'} element={<AddStudent/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );


}

export default Home;