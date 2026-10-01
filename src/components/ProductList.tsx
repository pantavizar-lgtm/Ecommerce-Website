import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

// ProductList receives an array of products from its parent.
interface ProductListProps {
  products: Product[];
}

// Renders a responsive grid of ProductCards from an array of product objects.
const ProductList = ({ products }: ProductListProps) => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
