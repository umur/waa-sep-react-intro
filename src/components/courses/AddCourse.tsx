import React, {useState} from "react";
import {ICourse} from "../Home";

interface IProps {
    addCourse: (course: ICourse) => void
}

const AddCourse: React.FC<IProps> = (props) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [code, setCode] = useState(0);

    const setCourse = () => {
        const course: ICourse = {id, name, code};
        props.addCourse(course);
    }

    return (
        <div>
            <h1>Course Add/Edit</h1>
            <div></div>
            <div>
                <div>
                    <div>
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="number" value={id} onChange={(e) => setId(+e.target.value)} className="form-control" id="formId"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">Code</label>
                        <input type="number" value={code} onChange={(e) => setCode(+e.target.value)} className="form-control" id="code"/>
                    </div>
                </div>
                <div>
                    <button id="save" onClick={() => setCourse()} className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;