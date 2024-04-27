import { useParams } from "react-router-dom"

function Product() {
    const {id} = useParams()
  return (
    <div className="align-content">
    <h1 className="text-3xl">Product - {id}</h1>
    </div>
  )
}

export default Product