import Review from "./Review";

export default function Reviews(props) {
    return (
        <div>
            {
                props.reviews.map((item) =>  {
                 return (
                       <Review
                          {...item}
                        />
                    )
                })
            }
        </div>
    )
}