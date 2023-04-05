import { Alert, Button, Col, Form, Row } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";
import { useNavigate } from "solid-start/router";
import { SignUpContext } from "../../contexts/SignUpContext";
import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";

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
      navigate("/dashboard", { replace: true });
    }
    setValidated(true);
  };

  return (
    <>
      <NavBar />

      <main class="w-50 m-auto content">
        <Alert show={getShow()} variant="success">
          {getMessage()}
        </Alert>

        <h1 class="h3 mb-5 fw-normal">Cadastre seu produto</h1>

        <Form noValidate validated={validated()} onSubmit={handleSubmit}>
          <Row class="mb-3">
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
          </Row>

          <Row class="mb-3">
            <h3>Fornecedor</h3>
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
          </Row>

          <Button class="w-25" variant="outline-primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </main>

      <Footer />
    </>
  );
};