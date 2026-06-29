export default function ReviewItem({ review }) {

    return (

        <div className="review">

            <h4>

                {"⭐".repeat(review.rating)}

            </h4>

            <strong>

                {review.user}

            </strong>

            <p>

                {review.comment}

            </p>

        </div>

    )

}