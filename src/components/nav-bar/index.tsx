import { type JSX } from "solid-js";

import { AiOutlineSearch, AiOutlineShoppingCart } from "solid-icons/ai";
import { IoPersonCircleSharp } from 'solid-icons/io';

import epet_logo from "../../assets/e-pet-logo.png";

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
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Produtos</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/product-list">Lista de Produtos</a>
                  <a class="dropdown-item" href="/product-registration">Cadastrar Produto</a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/product-list#cats">Ração para gato</a>
                  <a class="dropdown-item" href="/product-list#dogs">Ração para cachorro</a>
                </div>
              </div>
            </div>
          </div>
          <div class="header-links">
            <Nav.Link class="button" href="/shopping-cart"><AiOutlineShoppingCart /> Carrinho de compras</Nav.Link>
            <Nav.Link class="button" href="/login"><IoPersonCircleSharp /> Login<br />Cadastrar</Nav.Link>
          </div>
        </Container>
      </Navbar >
    </>
  );
};
