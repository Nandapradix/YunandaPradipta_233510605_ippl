import ReviewItem from "./ReviewItem"

export default function ReviewList({

reviews,

locationId

}){

const data = reviews.filter(

r => r.locationId===locationId

)

return(

<>

{

data.map(item=>

<ReviewItem

key={item.id}

review={item}

/>

)

}

</>

)

}