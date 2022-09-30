import Product from "./Product";

export default function Products(props){
    console.log(props);
    return (
        <div>
            {
                props.products.map((item) =>{
                    return <Product {...item}/>
                })
            }
        </div>
    )
}