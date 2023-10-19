import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import {
  addFromCart,
  deductFromCart,
  deleteFromCart,
} from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const deleteItemCart = () => dispatch(deleteFromCart(item));
  const addItemCart = () => dispatch(addFromCart(item));
  const deductItemCart = () => dispatch(deductFromCart(item));

  let subtotal = 0;
  subtotal += parseFloat(item.price.substring(2)) * item.amount;

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={3}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/${item.id}/200`}
              alt={item.name}
            />
          </Col>
          <Col xs={5}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text className="text-danger">{item.price}</Card.Text>
          </Col>
          <Col xs={4}>
            <div className="d-flex flex-column align-items-end">
              <Button
                variant="danger"
                onClick={deleteItemCart}
                className="px-2 py-1"
              >
                <i className="bi bi-x-lg"></i>
              </Button>

              <div className="mt-5">
                <Button
                  variant="outline-danger"
                  onClick={deductItemCart}
                  className="fs-5 px-2 py-1"
                >
                  <i className="bi bi-dash"></i>
                </Button>
                <span className="fs-6 px-3 bg-white text-secondary">
                  {item.amount}
                </span>
                <Button
                  variant="outline-secondary"
                  onClick={addItemCart}
                  className="fs-5 px-2 py-1"
                >
                  <i className="bi bi-plus"></i>
                </Button>
              </div>
              <span className="fs-5 mt-4 text-secondary fw-bold">
                RM{subtotal.toFixed(2)}
              </span>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
