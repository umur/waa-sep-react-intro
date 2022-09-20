import Person from "./Person";

export default function  Persons(props) {
    const {persons} = props;
    return (
        <div>
            {
                persons.map((p) => <Person key={p.id} fname={p.fname} lname={p.lname} />)
            }
        </div>
    );
}