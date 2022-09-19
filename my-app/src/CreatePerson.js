import { useState } from "react";

export default function CreatePerson(props) {
    const { addPerson, currentId } = props;
    const [personState, setPersonState] = useState({
        id: -1,
        fname: '',
        lname: ''
    });


    const onChanged = (e) => {
        setPersonState({...personState,
            [e.target.name]: e.target.value,
            id: currentId + 1
        })
    }

    const onCreateClicked = () => {
        addPerson({...personState});
    }

    return (
        <div>
            <input type='text' name='fname' value={personState.fname} onChange={onChanged}/>
            <input type='text' name='lname' value={personState.lname} onChange={onChanged}/>
            <p><input type='button' value='Create' onClick={onCreateClicked}/></p>
        </div>
    )
}