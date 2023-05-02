import { useRouter } from "next/router"


function reviewId() {
    const router = useRouter();
    const {reviewId, productId} = router.query
  return (
    <div>
     Namaskar sir how can i help you ?
     <h1>Call me on {productId}{reviewId}</h1>
    </div>
  )
}

export default reviewId
