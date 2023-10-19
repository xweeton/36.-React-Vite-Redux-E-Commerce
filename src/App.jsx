import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export function Layout() {
  const cart = useSelector((state) => state.cart);

  const totalItemsInCart = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Zeph E-Commerce App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">
              <i className="bi bi-cart3 fs-3"></i>
              <Badge pill bg="warning" text="dark">
                {totalItemsInCart}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
