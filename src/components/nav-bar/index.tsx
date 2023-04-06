import { type JSX } from "solid-js";

import { AiOutlineSearch } from "solid-icons/ai";

import epet_logo from "../../assets/e-pet-logo.webp";
import shopping_cart_icon from "../../assets/icons/shopping_cart_icon.webp";
import person_icon from "../../assets/icons/person_icon.webp";

import { Container, Nav, Navbar } from "solid-bootstrap";
import "./header.css";

export const NavBar = (): JSX.Element => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img class="logo" src={epet_logo} alt="Logo da E-Pet shop" /></Navbar.Brand>
          <div class="header-content">
            <div class="header-search">
              <input class="form-control" type="search" placeholder="Pesquise aqui" aria-label="Pesquise aqui" />
              <button class="btn btn-outline" type="submit"> <AiOutlineSearch /> </button>
            </div>
            <div class="header-options">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/product-list#cats">Ração para gato</a>
                  <a class="dropdown-item" href="/product-list#dogs">Ração para cachorro</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Produtos</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/product-list">Lista de Produtos</a>
                  <a class="dropdown-item" href="/product-registration">Cadastrar Produto</a>
                </div>
              </div>
            </div>
          </div>
          <div class="header-links">
            <Nav.Link class="button" href="/shopping-cart"><img src={shopping_cart_icon} alt="Ícone de carrinho de compras" /><br /><span>Carrinho <br /> de compras</span></Nav.Link>
            <Nav.Link class="button" href="/login"><img src={person_icon} alt="Ícone de perfil" /><br /><span>Login <br /> Cadastro</span></Nav.Link>
          </div>
        </Container>
      </Navbar >
    </>
  );
};
