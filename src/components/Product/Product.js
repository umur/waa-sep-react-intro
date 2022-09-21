import React from "react";

export default function Product (props) {

    const showDetailId = (id) => {
        props.setSelectedProductId(id);
    }
    return (
        <div>
            {
                props.products.map((item)=>{
                    return(
                        <table>
                            <tr>
                                <td><p>id = {item.id}</p></td><br></br>
                                <input type="button"
                                value = 'Details'
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