import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id, thumbnail } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);
  console.log(product);
  return (
    <>
      {product && (
        <div className="align-content">
          <img src={thumbnail} alt="" />
          <h1 className="text-4xl mb-3 text-center"><b>Product - {product.title}</b></h1>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mb-3">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                <img src={image} className="rounded-box max-h-64 lg:max-h-96 h-full object-contain" />
              </div>
              )
            })}
          </div>
          <p className="">{product.description}</p>
          <h2 className="text-3xl"><b>Price:</b> ${product.price}</h2>
          <p>Rating:  {product.rating}</p>
          <p>Stock: {product.stock}</p>

        </div>
      )}
    </>
  );
}

export default Product;
