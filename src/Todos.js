import Todo from "./Todo"

export default function Todos(props) {
    let i = 0;
    return (
        props.todos.map((item) => {
            return (
                <Todo
                    // userId = {item.userId}
                    // title = {item.title}
                    {...item}
                    setSelectedTodoId= {props.setSelectedTodoId}
                />
            )
        })

    )
}