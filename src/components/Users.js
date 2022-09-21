import User from "./User"



export default function Users(props){
    let i=0;
    return(
        <div>
            {
                props.users.map((item)=>{
            return(
                <User
                {...item}
                selectedStatedid={props.selectedStatedid}
                />
            )
                })
        }
        </div>
    )
}