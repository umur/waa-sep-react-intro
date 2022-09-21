import Category from "./Category";

export default function Categories(props) {
    return (
        <div>
            {
                props.categories.map((item) =>  {
                 return (
                       <Category
                          {...item}
                        />
                    )
                })
            }
        </div>
    )
}