import { Alert, Button, Col, Form, Row } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";
import { useNavigate } from "solid-start/router";
import { SignUpContext } from "../../contexts/SignUpContext";

export const ProductRegistration = (): JSX.Element => {
  const signUp = useContext(SignUpContext)?.signUp;

  const [validated, setValidated] = createSignal<boolean>(false);

  const [getInput, setInput] = createSignal<string>();

  const [getShow, setShow] = createSignal(false);
  const [getMessage, setMessage] = createSignal("");
  const [getAlertType, setAlertType] = createSignal<string>("danger");

  const navigate = useNavigate();

  const capturaInput = (event: any): void => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if ((form as HTMLFormElement).checkValidity() !== false) {
      setAlertType("success");
      setMessage("Cadastro realizado com sucesso!");
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);

      console.log("Cadastrado com sucesso");
      navigate("/dashboard", { replace: true });
    }
    setValidated(true);
  };

  return (
    <div class="w-50 m-auto">
      <Alert show={getShow()} variant="success">
        {getMessage()}
      </Alert>

      <h1 class="h3 mb-5 fw-normal">Cadastre seu produto</h1>

      <Form noValidate validated={validated()} onSubmit={handleSubmit}>
        <Row class="mb-3">
          <Form.Group as={Col} md="10" controlId="productName">
            <Form.Label>Nome do produto</Form.Label>
            <Form.Control
              id="productName"
              type="input"
              name="productName"
              class="form-control"
              placeholder="Nome do Produto"
              onChange={capturaInput}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="amount">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control
              id="amount"
              type="number_format"
              name="amount"
              class="form-control"
              value="1"
              onChange={capturaInput}
              maxlength="3"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="supplier">
            <Form.Label>Fornecedor</Form.Label>
            <Form.Control
              id="supplier"
              type="input"
              name="supplier"
              class="form-control"
              placeholder="Nome do fornecedor"
              onChange={capturaInput}
              required
            />
          </Form.Group>
        </Row>

        <Button class="w-25" variant="outline-primary" href="/dashboard">
          Voltar
        </Button>
        <Button class="w-25" variant="outline-primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};
