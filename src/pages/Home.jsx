import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";

const items = [
  { id: 1, name: "Pen", description: "It's a pen", price: "RM10.99" },
  {
    id: 2,
    name: "Laptop",
    description: "I think it's a laptop",
    price: "RM1200.59",
  },
  {
    id: 3,
    name: "iPhone 2",
    description: "Might be iPhone 3",
    price: "RM32.89",
  },
  {
    id: 4,
    name: "Notebook",
    description: "It's a notebook with hidden secrets",
    price: "RM1250.39",
  },
];

export default function Home() {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
