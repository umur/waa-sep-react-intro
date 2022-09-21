import Product from "./Product";

export default function Products(props) {
    return (
        <div>
            {
                props.products.map((item) =>  {
                 return (
                    <table>
                        <tr>
                            <td><p> id = {item.id}</p></td>

                            <input type= "button"/>
                        </tr>
                    </table>

                    //    <Product
                    //       {...item}
                        // />
                    )
                })
            }
        </div>
    )
}