import { type JSX } from "solid-js";

import { AiOutlineSearch, AiOutlineShoppingCart } from "solid-icons/ai";
import { IoPersonCircleSharp } from 'solid-icons/io';

import epet_logo from "../../assets/e-pet-logo.png";

export const NavBar = (): JSX.Element => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #F6F8F9;">
      <div class="container-fluid" style="margin: 0 64px 0 64px;">
        <a href="/"><img src={epet_logo} alt="imagem" style="width: 128px; height: 79px;" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="display: unset !important; margin-left: 24px;">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex; flex-direction: column;">
            <div class="search">
              <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Pesquise aqui" aria-label="Pesquise aqui" />
                <button class="btn btn-outline" type="submit">
                  <AiOutlineSearch />
                </button>
                <a href="/shopping-cart"><button type="button" class="btn"><AiOutlineShoppingCart /> Carrinho de compras</button></a>
                <button type="button" class="btn"><IoPersonCircleSharp /> Login<br />Cadastrar</button>
              </form>
            </div>

            <div style="display: flex; flex-direction: row;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Serviços
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Produtos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/login">
                      1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      3
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      3
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Promoções
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
