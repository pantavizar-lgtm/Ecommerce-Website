import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

const App = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Mini Shop</h1>
      <ProductList products={products} />
    </Container>
  );
};

export default App;
