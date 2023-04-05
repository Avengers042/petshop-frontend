import { type JSX } from "solid-js";

import { AiOutlineSearch, AiOutlineShoppingCart } from "solid-icons/ai";
import { IoPersonCircleSharp } from 'solid-icons/io';

import epet_logo from "../../assets/e-pet-logo.png";

import { Container, Nav, NavDropdown, Navbar } from "solid-bootstrap";
import "./header.css";

export const NavBar = (): JSX.Element => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img class="logo" src={epet_logo} alt="Logo da E-Pet shop" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse class="header" id="basic-navbar-nav">
            <div class="header-content">
              <div class="header-search">
                <input class="form-control" type="search" placeholder="Pesquise aqui" aria-label="Pesquise aqui" />
                <button class="btn btn-outline" type="submit"> <AiOutlineSearch /> </button>
              </div>
              <div class="header-options">
                <Nav.Link class="button" href="#servicos">Serviços</Nav.Link>
                <NavDropdown class="button" title="Produtos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#produto/1">1</NavDropdown.Item>
                  <NavDropdown.Item href="#produto/2">2</NavDropdown.Item>
                  <NavDropdown.Item href="#produto/3">3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#produto/1.4">4</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown class="button" title="Categorias" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#categoria/1">1</NavDropdown.Item>
                  <NavDropdown.Item href="#categoria/2">2</NavDropdown.Item>
                  <NavDropdown.Item href="#categoria/3">3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#categoria/3.4">4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link class="button" href="#promocoes">Promoções</Nav.Link>
              </div>
            </div>
            <div class="header-links">
              <Nav.Link class="button" href="/shopping-cart"><AiOutlineShoppingCart /> Carrinho de compras</Nav.Link>
              <Nav.Link class="button" href="/login"><IoPersonCircleSharp /> Login<br />Cadastrar</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
};
