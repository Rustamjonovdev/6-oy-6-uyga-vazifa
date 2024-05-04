import { data } from "autoprefixer";
import { useFetch } from "../hooks/useFetch";
import ProductsList from "../components/ProductsList";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");
  return (
    <div>
      <div className="align-content">
        <h1 className="text-3xl text-center mb-3">All products</h1>
        {isPending && <h3 className="text-xl text-center">Loading...</h3>}
        <ProductsList products={products} />
      </div>
    </div>
  );
}

export default Home;
