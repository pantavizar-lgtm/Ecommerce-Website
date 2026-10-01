import { Card } from "react-bootstrap";

// The props this component accepts. TypeScript checks every usage against this.
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

// Displays a single product. Receives its data through props.
const ProductCard = ({ name, price, image, rating }: ProductCardProps) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={name} className="product-img p-3" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{name}</Card.Title>
        <Card.Text className="text-muted mb-1">⭐ {rating}</Card.Text>
        <Card.Text className="fw-bold fs-5 mt-auto">${price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
