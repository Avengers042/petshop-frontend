import { AiOutlineSearch } from 'solid-icons/ai'
import { RiSystemArrowDropDownFill } from 'solid-icons/ri'
import { onMount, type JSX } from 'solid-js'

import { LazyImage } from '../../components/lazy-image'

import epet_logo from '@assets/e-pet-logo.webp'
import person_icon from '@assets/icons/person_icon.webp'
import shopping_cart_icon from '@assets/icons/shopping_cart_icon.webp'

import { logoutUser } from '../../services/user.service'
import { Button } from '../button'

import './header.css'
import { useNavigate } from 'solid-start/router'
import { destroyCookie } from 'nookies'

export const NavBar = (): JSX.Element => {
  const navigate = useNavigate()

  onMount(() => {
    const isLogged = Boolean(localStorage.getItem('@EPETAuth:user_email'))
    const shoppingCart = document.getElementById('shopping-cart-link')
    const profileLogged = document.getElementById('profile-logged')
    const profileNotLogged = document.getElementById('profile-not-logged')

    if (!isLogged) {
      if (shoppingCart != null) {
        shoppingCart.outerHTML = ''
      }

      if (profileLogged != null) {
        profileLogged.outerHTML = ''
      }
    } else {
      if (profileNotLogged != null) {
        profileNotLogged.outerHTML = ''
      }
    }
  })

  function logout (): void {
    void logoutUser({ email: localStorage.getItem('@EPETAuth:user_email')?.replace(/["]/g, '') ?? '' })
      .then(() => {
        localStorage.removeItem('@EPETAuth:user_email')
        localStorage.removeItem('@EPETAuth:token')

        destroyCookie(null, 'petshop_token', {})

        navigate('/login', { replace: true })
      })
  }

  return (
    <header>
      <div class="container">
        <div class="logo">
          <a href="/">
            <LazyImage url={epet_logo} alt="Logo da E-Pet" type="local" />
          </a>
        </div>

        <div class="central">
          <div class="search">
            <input
              type="search"
              placeholder="Pesquise aqui"
              aria-label="Pesquise aqui"
            />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </div>

          <nav>
            <li class="dropdown">
              <a href="/">
                Produtos <RiSystemArrowDropDownFill />
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/">Listagem de produtos</a>
                </li>
                <li>
                  <a href="/product-registration">Cadastrar produtos</a>
                </li>
              </ul>
            </li>
          </nav>
        </div>

        <aside>
          <li id="shopping-cart-link" class="side-links">
            <LazyImage
              url={shopping_cart_icon}
              alt="Logo da E-Pet"
              type="local"
            />
            <a href="/shopping-cart">Carrinho de compras</a>
          </li>
          <div id="login-signup" class="side-links">
            <LazyImage url={person_icon} alt="Logo da E-Pet" type="local" />
            <div id='profile-not-logged'>
              <li>
                <a href="/user-signup">Cadastro</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </div>
            <div id='profile-logged'>
              <li>
                <Button className="btn btn-black" type="button" text="Sair" onClick={logout} />
              </li>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
