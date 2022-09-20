import React, {useState} from "react";
import {ICourse, IStudent} from "../Home";

interface IProps {
    addStudent: (student: IStudent) => void
}

const AddStudent: React.FC<IProps> = (props) => {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGPA] = useState(0);

    const setStudent = () => {
        const student: IStudent = {id, firstName, lastName, email, major, gpa};
        props.addStudent(student);
    }

    return (
        <div>
            <h1>Student Add/Edit</h1>
            <div></div>
            <div>
                <div>
                    <div>
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="number" value={id} onChange={(e) => setId(+e.target.value)} className="form-control" id="formId"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Major</label>
                        <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">GPA</label>
                        <input type="number" value={gpa} onChange={(e) => setGPA(+e.target.value)} className="form-control" id="code"/>
                    </div>
                </div>
                <div>
                    <button id="save" onClick={() => setStudent()} className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;