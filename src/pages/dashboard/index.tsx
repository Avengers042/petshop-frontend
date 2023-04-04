import { type JSX, useContext } from "solid-js";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "solid-bootstrap";
import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";

export const Dashboard = (): JSX.Element => {
  const value = useContext(AuthContext);
  const user = value?.user;

  if (user == null) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <>
      <NavBar />

      <div class="w-50 m-auto">
        <h1>Bem vindo {user.name}!</h1>
        <h2>{user.email}</h2>
        <img src={user.avatar_url} />

        <Button class="w-25" variant="outline-primary" href="/product-list">
          Ver lista de Produtos
        </Button>
        <Button
          class="w-25"
          variant="outline-primary"
          href="/product-registration"
        >
          Cadastrar Produto
        </Button>
      </div>

      <Footer />
    </>
  );
};
