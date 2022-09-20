
export default function Todo(props) {

    const onShowDetailsClicked = () => {
        props.setSelectedTodoId();
    }

    return (
        <div>
            <h4>User Id: {props.userId}</h4>
            <h4>Id: {props.id}</h4>
            {/*<h4>Title: {props.title}</h4>
            <h4>Completed: {props.completed ? 'COMPLETED' : 'NOT COMPLETED'}</h4>*/}
            <input type='button' value='Show Detail' onClick={onShowDetailsClicked} />
        </div>
    )
}