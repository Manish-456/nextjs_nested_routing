import { useRouter } from "next/router"


function index() {
    const router = useRouter();
    const {productId} = router.query
  return (
    <div>
      Product with ProductId: {productId}
    </div>
  )
}

export default index
