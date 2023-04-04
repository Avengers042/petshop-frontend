import { Alert, Button } from "solid-bootstrap";
import { createSignal, useContext, type JSX } from "solid-js";
import { NavBar } from "../../components/nav-bar";
import { AuthContext } from "../../contexts/AuthContext";
import { Footer } from "../../components/footer";

export const Login = (): JSX.Element => {
  const signIn = useContext(AuthContext)?.signIn;
  const [getEmail, setEmail] = createSignal<string>();
  const [getPassword, setPassword] = createSignal<string>();

  const [getShow, setShow] = createSignal(false);
  const [getMessage, setMessage] = createSignal("");

  const capturaEmail = (event: any): void => {
    setEmail(event.target.value);
  };

  const capturaSenha = (event: any): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    try {
      if (getEmail() === null || getPassword() === null) {
        throw new Error("invalid inputs");
      }
      const user = {
        email: getEmail() ?? "error@email",
        password: getPassword() ?? "error@password",
      };

      if (signIn === undefined || user === undefined) {
        throw Error("signIn is undefined");
      }

      const sign = async (): Promise<void> => {
        await signIn(user);
      };
      void sign();

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
    }, 3000);
  };

  return (
    <>
      <NavBar />

      <div class="body" style="margin-top: 5%;">
        <h1 class="h1" style="text-align: center;">
          Login
        </h1>

        <div class="w-50 m-auto">
          <Alert show={getShow()} variant="success">
            {getMessage()}
          </Alert>
          <form class="row g-3" onSubmit={handleSubmit}>
            <div>
              <label for="validationServer01" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="Email do usuário"
                id="validationServer01"
                onChange={capturaEmail}
                required
              />
            </div>
            <div>
              <label for="validationServer02" class="form-label">
                Senha
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Senha do usuário"
                id="validationServer02"
                onChange={capturaSenha}
                required
              />
            </div>

            <div
              class="col-12"
              style="display: flex; justify-content: space-between;"
            >
              <button
                class="btn"
                style="background-color: black; color: white; width: 86px; border-radius: 100px;"
                type="submit"
              >
                Entrar
              </button>
              <a href="#" class="btn">
                Esqueci a minha senha
              </a>
            </div>
          </form>
          Não possui cadastro?{" "}
          <a href="/user-signup" textContent="Clique aqui" />
        </div>
      </div>

      <Footer />
    </>
  );
};
