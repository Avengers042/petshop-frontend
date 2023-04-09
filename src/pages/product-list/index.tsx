import { type JSX } from 'solid-js'
import { NavBar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import welcomeOne from '../../../../../../../../src/assets/welcome-cats-dog-1.webp'
import ListProducts from './products.json'
import ListServices from './services.json'
import './product-list.css'

export const ProductList = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main id="product-list">
        <div class="container">
          <div class="welcome">
            <img src={welcomeOne} alt="2 gatos brincando um cachorro" />
          </div>

          <div class="list">
            <h1>Nossos serviços</h1>

            <div class="card-group">
              {ListServices.map(service =>
                <div class="service card">
                  <img src={service.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title">{service.name}</h2>
                  <h3 class="card-text">{service.description}</h3>
                  <button
                    class="card-button"
                    type="submit"
                  >
                    Contratar
                  </button>
                </div>
              )}
            </div>
          </div>

          <div class="service-list list">
            <h1 id="cats">Gatos</h1>

            <div class="card-group">
              {ListProducts.map(product =>
                <div class="card">
                  <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title"><a href="/product-item">{product.name}</a></h2>
                  <h3 class="card-subtitle">{product.brand}</h3>
                  <div class="card-text">
                    <p>R$ {product.price}</p>
                    <p class="card-label">{product.discount}% OFF</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div class="list">
            <h1 id="dogs">Cachorros</h1>

            <div class="card-group">
              {ListProducts.map(product =>
                <div class="card">
                  <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title"><a href="/product-item">{product.name}</a></h2>
                  <h3 class="card-subtitle">{product.brand}</h3>
                  <div class="card-text">
                    <p>R$ {product.price}</p>
                    <p class="card-label">{product.discount}% OFF</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </main>

    </>
  )
}
