import { Alert, Button, Form, FormControl, FormGroup } from "solid-bootstrap";
import { createSignal, useContext } from "solid-js";
import { AuthContext } from "../contexts/AuthContext";

export function Login() {
  const { signIn } = useContext(AuthContext);

  const [getEmail, setEmail] = createSignal<string>();
  const [getPassword, setPassword] = createSignal<string>();

  const [getShow, setShow] = createSignal(false);
  const [getMessage, setMessage] = createSignal("");

  const capturaEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const capturaSenha = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = { email: getEmail() || "error@email", password: getPassword() || "error@password" };

    try {
      await signIn(user);

      setMessage("Login realizado com sucesso!");
      setShow(true);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
        setShow(true);
      }
    }

    setTimeout(() => {
      setShow(false);
    }, 5000);
  }

  return (
    <div class="w-50 m-auto">
      <Alert show={getShow()} variant="success">
        {getMessage()}
      </Alert>

      <h1 class="h3 mb-3 fw-normal">Faça seu Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl
            id="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Insira seu email"
            onChange={capturaEmail}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            id="password"
            type="password"
            name="password"
            class="form-control"
            placeholder="Insira sua senha"
            onChange={capturaSenha}
            required
          />
        </FormGroup>

        <Button class="w-50" as="input" type="submit" value="Login" />
      </Form>
    </div>
  );
}
