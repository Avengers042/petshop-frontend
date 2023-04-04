import { Alert, Button, Col, Form, InputGroup, Row } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";

import { SignUpContext } from "../../contexts/SignUpContext";

import { useNavigate } from "solid-start/router";
import "./user-signup.css";

export const UserSignup = (): JSX.Element => {
  const signUp = useContext<any>(SignUpContext)?.signUp;

  const [validated, setValidated] = createSignal<boolean>(false);

  const [getEmail, setEmail] = createSignal<string>();
  const [getPassword, setPassword] = createSignal<string>();

  const [getShow, setShow] = createSignal(false);
  const [getMessage, setMessage] = createSignal("");
  const [getAlertType, setAlertType] = createSignal<string>("danger");

  const navigate = useNavigate();

  const capturaEmail = (event: any): void => {
    setEmail(event.target.value);
  };

  const capturaSenha = (event: any): void => {
    setPassword(event.target.value);
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
      navigate("/login", { replace: true });
    }
    setValidated(true);
  };

  return (
    <div class="w-50 m-auto">
      <Alert show={getShow()} variant={getAlertType()}>
        {getMessage()}
      </Alert>

      <h1 class="h3 mb-3 fw-normal">Faça seu cadastro</h1>

      <Form noValidate validated={validated()} onSubmit={handleSubmit}>
        <Row class="mb-3">
          <Form.Group as={Col} md="6" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control required type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastName">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control type="text" placeholder="Sobrenome" />
          </Form.Group>
        </Row>
        <Row class="mb-3">
          <Form.Group as={Col} md="6" controlId="address">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Quadra 0 Bloco X, Bairro bairro, Cidade, Distrito"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="cpf">
            <Form.Label>CPF</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number_format"
                placeholder="000.000.000-00"
                maxlength="14"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="age">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="date" placeholder="36" required />
          </Form.Group>
        </Row>
        <Row class="mb-3">
          <Form.Group as={Col} md="6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              required
              onChange={capturaEmail}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              required
              onChange={capturaSenha}
            />
          </Form.Group>
        </Row>

        <Button class="w-25" variant="outline-primary" href="/login">
          Voltar
        </Button>
        <Button class="w-25" variant="outline-primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};
