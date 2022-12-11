import React, {useState} from "react";
import {ICourse} from "../../models/ICourse";
import {useNavigate} from "react-router";
import axios from "axios";
import {BASE_URL} from "../../utils/GlobalConstants";

interface IProps {

}

const AddCourse: React.FC<IProps> = (props) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [code, setCode] = useState(0);
    const navigation = useNavigate();


    const save = async () => {
        await axios.post(`${BASE_URL}/courses`, {id, name, code});
        navigation('/');
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
                    <button id="save" onClick={() => save()} className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;