export default function Todo(props){
    
    const onShowDetailsClicked = (id)=>{
        props.setSelectedTodoId(id);
    }

    return (
        <div>
            <h4>User Id: {props.userId}</h4>
            <h4>Id: {props.id}</h4>
            <input 
            type='button'
            value='Show Details'
            onClick={ ()=> {onShowDetailsClicked(props.id)}}
            /> 
            {/* <h4>Title: {props.title}</h4>
            <h4>User Id: {props.complated ? 'COMPLATED': 'NOT COMPLATED'}</h4> */}
           <br/> ****************************************
        </div>
    )
}