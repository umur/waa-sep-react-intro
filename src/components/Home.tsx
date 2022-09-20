import * as React from 'react';
import {useState} from "react";
import AddCourse from "./courses/AddCourse";
import CourseList from "./courses/CourseList";
import AddStudent from "./students/AddStudent";
import StudentList from "./students/StudentList";

interface Props {
}

export interface ICourse {
    id: number;
    name: string;
    code: number;
}

export interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    major: string;
    gpa: number;
}

const Home: React.FC<Props> = (props) => {

    const [courses, setCourses] = useState<ICourse[]>([]);
    const [students, setStudents] = useState<IStudent[]>([]);

    const addCourse = (course: ICourse) => {
        setCourses([...courses, course]);
    }

    const addStudent = (student: IStudent) => {
        setStudents([...students, student]);
    }

    return (
        <div style={{width: "75%", margin: "0 auto"}}>
            <div style={{border: "1px solid #ccc", borderRadius: "5px", padding: "50px 20px", margin: "50px 0", boxShadow: "10px 10px #eee"}}>
                <AddCourse addCourse={addCourse}/>
                <CourseList courses={courses}/>
            </div>
            <div style={{border: "1px solid #ccc", borderRadius: "5px", padding: "50px 20px", margin: "50px 0", boxShadow: "10px 10px #eee"}}>
                <AddStudent addStudent={addStudent}/>
                <StudentList students={students}/>
            </div>
        </div>
    );


}

export default Home;