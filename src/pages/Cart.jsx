import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += parseFloat(item.price.substring(2)) * item.amount;
  });
  return (
    <Container>
      <h2 className="mt-4">Your Cart:</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <h4 className="text-end me-5 mt-3 text-danger">
        Total: RM{subtotal.toFixed(2)}
      </h4>
    </Container>
  );
}
