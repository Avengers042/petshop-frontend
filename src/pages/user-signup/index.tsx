import { Alert, Col, Form, Row } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";

import { SignUpContext } from "../../contexts/SignUpContext";

import { useNavigate } from "solid-start/router";
import { NavBar } from "../../components/nav-bar/index";
import "./user-signup.css";
import { Footer } from "../../components/footer";

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
    <>
      <NavBar />

      <div class="body" style="margin-top: 3%;">
        <h1 style="text-align: center;"> Cadastro de Usuário </h1>

        <div class="w-50 m-auto">
          <Alert show={getShow()} variant={getAlertType()}> {getMessage()} </Alert>

          <h2>Usuário</h2>

          <Form noValidate validated={validated()} onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" required />
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="lastName">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control type="text" placeholder="Seu sobrenome" />
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Seu email" onChange={capturaEmail} required />
            </Form.Group>
            <Row class="mb-3">
              <Form.Group as={Col} md="6" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite uma senha segura" onChange={capturaSenha} required />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="age">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Row>

            <h2>Endereço</h2>

            <Row class="mb-3">
              <Form.Group as={Col} md="6" controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="number" placeholder="00000-000" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="uf">
                <Form.Label>UF</Form.Label>
                <Form.Select aria-label="Unidade Federativa">
                  <option value="df">Distrito Federal</option>
                  <option value="bh">Belo Horizonte</option>
                  <option value="sp">São Paulo</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group as={Col} md="12" controlId="publicPlace">
              <Form.Label>Logradouro</Form.Label>
              <Form.Control type="text" placeholder="Ex.: Quadra 1, Lote J, Entre Quadras (AQ), Área Especial (AE) etc" />
            </Form.Group>
            <Row class="mb-3">
              <Form.Group as={Col} md="6" controlId="district">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Ex.: Setor Central (Gama)" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="number">
                <Form.Label>Número</Form.Label>
                <Form.Control type="number" placeholder="Ex.: 1" />
              </Form.Group>
            </Row>
            <Form.Group as={Col} md="12" controlId="complement">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" placeholder="Ex.: Apartamento, Condomínio, etc" />
            </Form.Group>

            <Form.Group as={Col} md="12" style='text-align: end; margin: 16px 0 16px 0;'>
              <button class="btn" style="background-color: black; color: white; width: 110px; border-radius: 100px;" type="submit">
                Cadastrar
              </button>
            </Form.Group>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};
