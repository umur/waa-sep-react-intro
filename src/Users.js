import User from './User';
 
export default function Users(props){
    console.log(props);
    return (
        <div>
            {
                props.users.map((item) =>{

                    return <User {...item} />
                })
            }
        </div>
        
    )
}