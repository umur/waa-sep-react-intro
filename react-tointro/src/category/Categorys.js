import Category from "./Category";

export default function Categorys (props) {
    return props.Categorys.map ((item) => {
        return (
            <Category 
            {...item}
            />
        );
    })
} 