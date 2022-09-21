import Address from "./Address";

export default function Adresses(props) {
    return (
        <div>
            {
                props.categories.map((item) =>  {
                 return (
                       <Address
                          {...item}
                        />
                    )
                })
            }
        </div>
    )
}