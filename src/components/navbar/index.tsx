import { type JSX } from 'solid-js'

import shopping_cart_icon from '@assets/icons/shopping_cart_icon.webp'
import person_icon from '@assets/icons/person_icon.webp'
import { AiOutlineSearch } from 'solid-icons/ai'
import { RiSystemArrowDropDownFill } from 'solid-icons/ri'
import epet_logo from '@assets/e-pet-logo.webp'
import './header.css'

export const NavBar = (): JSX.Element => {
  return (
    <header>
      <div class="container">
        <div class="logo">
          <img src={epet_logo} alt="Logo da E-Pet" />
        </div>

        <div class="central">
          <div class="search">
            <input type="search" placeholder='Pesquise aqui' aria-label='Pesquise aqui' />
            <button type="submit"><AiOutlineSearch /></button>
          </div>

          <nav>
            <li><a href="#">Serviços</a></li>
            <li class="dropdown">
              <a href="#">Produtos <RiSystemArrowDropDownFill /></a>
              <ul class="dropdown-menu">
                <li><a href="#produtos">Listagem de produtos</a></li>
                <li><a href="#cadastro-produtos">Cadastrar produtos</a></li>
              </ul>
            </li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Promoções</a></li>
          </nav>
        </div>

        <aside>
          <li id="shopping-cart" class="side-links">
            <img src={shopping_cart_icon} alt="" />
            <a href="#">Carrinho de compras</a>
          </li>
          <div id="login-signup" class="side-links">
            <img src={person_icon} alt="side-links" />
            <div>
              <li><a href="#">Cadastro</a></li>
              <li><a href="#">Login</a></li>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
