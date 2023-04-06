import { Alert, Button, Col, Form, Row } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";
import { useNavigate } from "solid-start/router";
import { SignUpContext } from "../../contexts/SignUpContext";
import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import "./product-registration.css";

export const ProductRegistration = (): JSX.Element => {
  const signUp = useContext(SignUpContext)?.signUp;

  const [validated, setValidated] = createSignal<boolean>(false);

  const [getInput, setInput] = createSignal<string>();

  const [getShow, setShow] = createSignal(false);
  const [getMessage, setMessage] = createSignal("");
  const [getAlertType, setAlertType] = createSignal<string>("danger");

  const navigate = useNavigate();

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if ((form as HTMLFormElement).checkValidity() !== false) {
      navigate("/product-list", { replace: true });
    }
    setValidated(true);
  };

  return (
    <>
      <NavBar />

      <main id="product-registration">
        <div class="w-50 mx-auto my-5 ">
        <Alert show={getShow()} variant="success">
          {getMessage()}
        </Alert>

        <h1 class="h3 mb-5 fw-normal">Cadastre seu produto</h1>

        <Form noValidate validated={validated()} onSubmit={handleSubmit}>
          <h3>Produto</h3>
          <Form.Group as={Col} md="10" controlId="productName">
            <Form.Label>Nome do produto</Form.Label>
            <Form.Control
              id="productName"
              type="text"
              name="productName"
              class="form-control"
              placeholder="Nome do Produto"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="amount">
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
          <Form.Group as={Col} md="12" controlId="description">
            <Form.Label>Descrição do produto</Form.Label>
            <Form.Control
              id="description"
              type="text"
              name="description"
              class="form-control"
              placeholder="Descrição do produto"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="price">
            <Form.Label>Preço do produto (R$)</Form.Label>
            <Form.Control
              id="price"
              type="text"
              name="price"
              value="0"
              class="form-control"
              placeholder="Preço do produto"
              required
            />
          </Form.Group>

          <h3 style="margin-top: 24px">Fornecedor</h3>
          <Form.Group as={Col} md="12" controlId="productName">
            <Form.Label>Nome do produto</Form.Label>
            <Form.Control
              id="productName"
              type="text"
              name="productName"
              class="form-control"
              placeholder="Nome do Produto"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="corporate-name">
            <Form.Label>Razão social</Form.Label>
            <Form.Control
              id="corporate-name"
              type="text"
              name="corporate-name"
              class="form-control"
              placeholder="Ex.: Ecommerce Petshop LTDA."
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="fantasy-name">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="fantasy-name"
              type="text"
              name="fantasy-name"
              class="form-control"
              placeholder="Ex.: E-Pet"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              class="form-control"
              placeholder="fornecedor@email.com"
              required
            />
          </Form.Group>

          <h3 style="margin-top: 24px">Endereço do Fornecedor</h3>

          <Row class="mb-3">
            <Form.Group as={Col} md="6" controlId="cep">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="number" placeholder="00000-000" required />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="uf">
              <Form.Label>UF</Form.Label>
              <Form.Select aria-label="Unidade Federativa" required>
                <option value="df">Distrito Federal</option>
                <option value="bh">Belo Horizonte</option>
                <option value="sp">São Paulo</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="publicPlace">
            <Form.Label>Logradouro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex.: Quadra 1, Lote J, Entre Quadras (AQ), Área Especial (AE) etc"
              required
            />
          </Form.Group>

          <Row class="mb-3">
            <Form.Group as={Col} md="6" controlId="district">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.: Setor Central (Gama)"
                required
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="number">
              <Form.Label>Número</Form.Label>
              <Form.Control type="number" placeholder="Ex.: 1" required />
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="complement">
            <Form.Label>Complemento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex.: Apartamento, Condomínio, etc"
              required
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            style="text-align: end; margin: 16px 0 16px 0;"
          >
            <button
              class="btn"
              style="background-color: black; color: white; width: 110px; border-radius: 100px;"
              type="submit"
            >
              Cadastrar
            </button>
          </Form.Group>
        </Form>
        </div>
        
      <Footer />
      </main>

    </>
  );
};
