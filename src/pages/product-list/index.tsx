import { For, type JSX, Suspense, createMemo } from 'solid-js'
import { NavBar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { Button } from '../../components/button'
import ListProducts from './products.json'
import ListServices from './services.json'
import { CardGroup } from '../../components/card-group'
import { Card } from '../../components/card-group/card'
import { LazyImage } from '../../components/lazy-image'
import './product-list.css'

export const ProductList = (): JSX.Element => {
  const services = createMemo(() => ListServices, [])
  const products = createMemo(() => ListProducts, [])

  return (
    <>
      <NavBar />
      <main id="product-list" class="content">
        <div class="container">
          <div class="welcome">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage
                url="welcome-cats-dog-1_buntnm"
                alt="2 gatos brincando um cachorro"
                type="remote"
              />
            </Suspense>
          </div>

          <div class="list">
            <h1>Nossos serviços</h1>

            <CardGroup>
              <For each={services()}>
                {(service) => (
                  <Card className="service">
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyImage
                        url={service.image}
                        alt={service.alt}
                        type="remote"
                      />
                    </Suspense>
                    <h2 class="card-title">{service.name}</h2>
                    <h3 class="card-text">{service.description}</h3>
                    <Button className="btn btn-black" type="submit" text="Contratar" />
                  </Card>
                )}
              </For>
            </CardGroup>
          </div>

          <div class="list">
            <h1 id="cats">Gatos</h1>

            <CardGroup>
              <For each={products()}>
                {(product) => (
                  <Card className="product">
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyImage
                        url={product.image}
                        alt={product.alt}
                        type="remote"
                      />
                    </Suspense>
                    <h2 class="card-title">
                      <a href="/product-item">{product.name}</a>
                    </h2>
                    <h3 class="card-subtitle">{product.brand}</h3>
                    <div class="card-text">
                      <p>R$ {product.price}</p>
                      <p class="card-label">{product.discount}% OFF</p>
                    </div>
                  </Card>
                )}
              </For>
            </CardGroup>
          </div>

          <div class="list">
            <h1 id="dogs">Cachorros</h1>

            <CardGroup>
              <For each={ListProducts}>
                {(product) => (
                  <Card className="product">
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyImage
                        url={product.image}
                        alt={product.alt}
                        type="remote"
                      />
                    </Suspense>
                    <h2 class="card-title">
                      <a href="/product-item">{product.name}</a>
                    </h2>
                    <h3 class="card-subtitle">{product.brand}</h3>
                    <div class="card-text">
                      <p>R$ {product.price}</p>
                      <p class="card-label">{product.discount}% OFF</p>
                    </div>
                  </Card>
                )}
              </For>
            </CardGroup>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
