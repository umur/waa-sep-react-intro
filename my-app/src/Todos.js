import Todo from "./Todo";

export default function Todos(props) {
    return (
        props.todos.map((item) => {
            return (
                <Todo key={item.id} {...item} />
            )
        })
    )
}