import { type JSX } from 'solid-js'
import { NavBar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { Button } from '../../components/button'
import welcomeOne from '@assets/welcome-cats-dog-1.webp'
import ListProducts from './products.json'
import ListServices from './services.json'
import { CardGroup } from '../../components/card-group'
import { Card } from '../../components/card-group/card'
import './product-list.css'

export const ProductList = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main id="product-list" class="content">
        <div class="container">
          <div class="welcome">
            <img src={welcomeOne} alt="2 gatos brincando um cachorro" />
          </div>

          <div class="list">
            <h1>Nossos serviços</h1>

            <CardGroup>
              {ListServices.map(service =>
                <Card className="service">
                  <img src={service.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title">{service.name}</h2>
                  <h3 class="card-text">{service.description}</h3>
                  <Button className='black' type='submit' text='Contratar'/>
                </Card>
              )}
            </CardGroup>
          </div>

          <div class="list">
            <h1 id="cats">Gatos</h1>

            <CardGroup>
              {ListProducts.map(product =>
                <Card className='product'>
                  <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title"><a href="/product-item">{product.name}</a></h2>
                  <h3 class="card-subtitle">{product.brand}</h3>
                  <div class="card-text">
                    <p>R$ {product.price}</p>
                    <p class="card-label">{product.discount}% OFF</p>
                  </div>
                </Card>
              )}
            </CardGroup>
          </div>

          <div class="list">
            <h1 id="dogs">Cachorros</h1>

            <CardGroup>
              {ListProducts.map(product =>
                <Card className='product'>
                  <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
                  <h2 class="card-title"><a href="/product-item">{product.name}</a></h2>
                  <h3 class="card-subtitle">{product.brand}</h3>
                  <div class="card-text">
                    <p>R$ {product.price}</p>
                    <p class="card-label">{product.discount}% OFF</p>
                  </div>
                </Card>
              )}
            </CardGroup>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
