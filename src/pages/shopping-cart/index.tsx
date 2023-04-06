import { Col, Form, Row, Table } from "solid-bootstrap";
import { createSignal, type JSX } from "solid-js";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/nav-bar";

import granplus from "/src/assets/granplus-dog.webp";

import "./shopping-cart.css";

import ListProducts from "./products-cart.json";

export const ShoppingCart = (): JSX.Element => {
  const [getTotalValue, setTotalValue] = createSignal(0);

  ListProducts.forEach(product => {
    setTotalValue(getTotalValue() + (product.price * product.quantity))
  })

  function getValueWithMonetaryMask(value: number | string, locale: string, currency: string): string {
    return value.toLocaleString(locale, { style: 'currency', currency });
  }

  return (
    <>
      <NavBar />

      <main id="shopping-cart">
        <div class="container">
          <div class="body" style="margin-top: 3%;">
            <h1 class="h1" style="text-align: center;">Carrinho de Compras</h1>

            <div class="content-body">
              <div class="table" style="display: flex;">
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
                        <td><img src={granplus} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" style="height: 80px;" /></td>
                        <td>{product.name}</td>
                        <td>{getValueWithMonetaryMask(product.price, 'pt-BR', 'BRL')}</td>
                        <td>{product.quantity}</td>
                        <td>{getValueWithMonetaryMask(product.price * product.quantity, 'pt-BR', 'BRL')}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                <div class="total">
                  <h1>TOTAL</h1>
                  <span>{getValueWithMonetaryMask(getTotalValue(), 'pt-BR', 'BRL')}</span>

                  <div>
                    <a href="#"><button type="button" class="btn" style="background-color: black; color: white;">Ir para pagamento</button></a>
                    <a href="/product-list"><button type="button" class="btn">Escolher mais produtos</button></a>
                  </div>
                </div>
              </div>

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
          </div>
        </div >

        <Footer />
      </main >
    </>
  );
};