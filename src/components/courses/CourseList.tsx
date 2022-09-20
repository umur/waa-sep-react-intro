import React from 'react';
import {ICourse} from "../Home";

interface IProps {
    courses: ICourse[]
}

const CourseList: React.FC<IProps> = (props)  => {
    return (
        <div style={{margin: "0 auto", marginTop: "50px"}}>
            <h1>Courses List</h1>
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
                    {props.courses && props.courses.map(course => (
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