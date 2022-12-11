import React, {useEffect, useState} from 'react';
import {ICourse} from "../../models/ICourse";
import {Link} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../utils/GlobalConstants";

interface IProps {

}

const CourseList: React.FC<IProps> = (props)  => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const getCourses = async () => {
        const res = await axios.get(`${BASE_URL}/courses`);
        setCourses(res.data);
    }
    useEffect(() => {
        getCourses();
    }, []);
    return (
        <div style={{margin: "0 auto", marginTop: "50px"}}>
            <h1>Courses List</h1>
            <div>
                <Link to={'/courses/add'}><button className={'btn btn-primary'}>Add Course</button></Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody id="tbody">
                    {courses && courses.map(course => (
                        <tr>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseList;