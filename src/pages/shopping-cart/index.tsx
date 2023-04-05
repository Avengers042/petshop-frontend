import { Carousel, Col, Form, Row, Table } from "solid-bootstrap";
import { type JSX } from "solid-js";
import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";

import ListProducts from "./products-cart.json";

export const ShoppingCart = (): JSX.Element => {
  return (
    <>
      <NavBar />

      <div class="body" style="margin-top: 3%;">
        <h1 class="h1" style="text-align: center;">Carrinho de Compras</h1>

        <div class="w-50 m-auto">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

              {ListProducts.map(product =>
                <tr>
                  <td><img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" style="height: 80px;" /></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              )}
            </tbody>
          </Table>

          <Form>
            <Row class="mb-3">
              <Form.Group as={Col} md="5" controlId="name">
                <Form.Label>Cupom de desconto</Form.Label>
                <Form.Control type="text" placeholder="Digite seu cupom" required />
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="name">
                <Form.Label>Consultar CEP</Form.Label>
                <Form.Control type="number" placeholder="Descreva o produto" required />
              </Form.Group>
              <Form.Group as={Col} md="1" style='display: flex; align-items: flex-end;'>
                <button class="btn" style="background-color: black; color: white; width: 110px; border-radius: 100px;" type="submit">
                  Consultar
                </button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div >

      <Footer />
    </>
  );
};