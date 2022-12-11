import React, {useEffect, useState} from 'react';
import {IStudent} from "../../models/IStudent";
import axios from "axios";
import {BASE_URL} from "../../utils/GlobalConstants";
import {Link} from "react-router-dom";

interface IProps {

}

const StudentList: React.FC<IProps> = (props)  => {

    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const res = await axios.get(`${BASE_URL}/students`);
        setStudents(res.data);
    }

    return (
        <div style={{margin: "0 auto", marginTop: "50px"}}>
            <h1>Courses List</h1>
            <div>
                <Link to={'/students/add'}><button className={'btn btn-primary'}>Add Student</button></Link>
            </div>
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
                    {students && students.map(student => (
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