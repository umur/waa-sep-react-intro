import React from 'react';
import {IStudent} from "../Home";

interface IProps {
    students: IStudent[]
}

const StudentList: React.FC<IProps> = (props)  => {
    return (
        <div style={{margin: "0 auto", marginTop: "50px"}}>
            <h1>Courses List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Major</th>
                    <th scope="col">GPA</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody id="tbody">
                    {props.students && props.students.map(student => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td>{student.gpa}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;