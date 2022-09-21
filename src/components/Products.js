import React from "react";

export default function Product(props){


    const showDetailId=(id)=>{
        props.setProductStateId(id);
    }


    return(
        <div>
            {
                props.products.map((item)=>{
            return(
                <table>
                <tr>
                <td><p> id={item.id}</p></td><br></br>
                    {/* <td><p> Product name={item.name}/</p></td>
                    <td><p>Product price={item.price}/</p></td>
                    <td><p> Rating={item.rating}/</p></td> */}
                   
                    <input type="button"
                     value='Details'
                     onClick={()=>{
                        showDetailId(item.id);
                     }}
                     />

                </tr>
            </table>
            )
                })
        }
        </div>
    )
}