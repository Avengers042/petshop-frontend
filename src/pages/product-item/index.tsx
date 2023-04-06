import { Button, Col, Form } from "solid-bootstrap";
import { createSignal } from "solid-js";
import { useNavigate } from "solid-start/router";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/nav-bar";

import granplus from "/src/assets/granplus-dog.webp";

import "./product-item.css";

export const ProductItem = () => {
  const [validated, setValidated] = createSignal<boolean>(false);
  const [url, setNewUrl] = createSignal<string>("/");

  const navigate = useNavigate();

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if ((form as HTMLFormElement).checkValidity() !== false) {
      navigate(url(), { replace: true });
    }
    setValidated(true);
  };
  return (
    <>
      <NavBar />
      <main id="product-item">
        <div class="container my-5">
          <div class="product-header">
            <div class="image-product">
              <img src={granplus} alt="Imagem do produto" />
            </div>
            <div class="product-main">
              <h1>Ração GranPlus Choice Frango e Carne para Cães Adultos</h1>

              <div class="product-header-main">
                <Form noValidate validated={validated()} onSubmit={handleSubmit}>
                  <Form.Group as={Col} md="12" controlId="productName">
                    <Form.Label>Tamanhos</Form.Label>
                    <Form.Check
                      id="weight-10"
                      type="radio"
                      name="weight"
                      label="10 kg"
                      required
                    />
                    <Form.Check
                      id="weight-15"
                      type="radio"
                      name="weight"
                      label="15 kg"
                      required
                    />
                    <Form.Check
                      id="weight-20"
                      type="radio"
                      name="weight"
                      label="20 kg"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="amount">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control
                      id="amount"
                      type="number"
                      name="amount"
                      class="form-control"
                      value="1"
                      maxlength="3"
                      required
                    />
                  </Form.Group>

                  <div class="buttons">
                    <Button class="rounded-pill" type="submit" variant="dark" style="margin-right: 8px;" onClick={() => setNewUrl("/dashboard")}>Comprar</Button>
                    <Button class="rounded-pill" type="submit" variant="dark" onClick={() => setNewUrl("/shopping-cart")} >Adicionar ao carrinho</Button>
                  </div>
                </Form>

                <div class="price">
                  <p>R$ 119.99</p>
                  <p class="label">10% OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div class="description">
            <h3>Descrição</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et urna eu lacus placerat posuere vitae et nisl. Sed non orci hendrerit, vestibulum ante id, feugiat orci. Sed quis felis tincidunt, efficitur metus quis, facilisis nibh. Phasellus non justo eget dolor aliquet aliquam. Curabitur eget cursus neque. Aenean aliquet leo elit, porta rhoncus velit tincidunt et. Integer pretium, purus sed ornare euismod, ante leo auctor diam, sed pretium mi lorem at nisl. Mauris vel aliquam nulla. Praesent ornare felis sit amet eros semper accumsan.</p>
            <p>Fusce finibus consequat mollis. Aliquam finibus lectus nec velit accumsan, a eleifend elit fringilla. Mauris at lacus sit amet nisl malesuada tempor. Aliquam erat volutpat. In consectetur pellentesque tempus. Praesent a lorem in risus gravida bibendum et in orci. Sed ante justo, ornare et tortor at, auctor ullamcorper lectus. Praesent enim sapien, pellentesque sit amet justo ut, pharetra ullamcorper libero. Aliquam pellentesque, urna eget faucibus pulvinar, arcu est tempor sem, ut condimentum odio risus non odio. Donec pulvinar mi non eros accumsan cursus. Integer risus est, tristique molestie eleifend sit amet, elementum bibendum risus. Vestibulum volutpat nibh in iaculis convallis. Proin imperdiet aliquam massa, ut semper dui.</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}