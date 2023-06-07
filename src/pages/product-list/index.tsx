import { For, Suspense, createSignal, onMount, type JSX } from 'solid-js'

import { CardGroup } from '../../components/card-group'
import { Card } from '../../components/card-group/card'
import { Footer } from '../../components/footer'
import { LazyImage } from '../../components/lazy-image'
import { NavBar } from '../../components/navbar'

import { findAllCategories } from '../../services/category.service'
import { findAllProducts } from '../../services/product.service'

import './product-list.css'

export const ProductList = (): JSX.Element => {
  const [categories, setCategories]: any = createSignal()
  const [products, setProducts]: any = createSignal()
  // const [images, setImages]: any = createSignal()

  onMount(() => {
    void findAllCategories().then(res => setCategories(res.data))
    void findAllProducts().then(res => setProducts(res.data))
    // void findAllImages().then(res => setImages(res.data))
  })

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

          <For each={categories()}>
            {(category) => (
              <div class="list">
                <h1 id="cats">{category.name}</h1>

                <CardGroup>
                  <For each={products()}>
                    {(product) => {
                      if (category.categoryId === product.categoryId) {
                        return (
                          <Card className="product">
                            <Suspense fallback={<div>Loading...</div>}>
                              <LazyImage
                                url="granplus-dog_tzvqbg"
                                alt="Ração para cachorro adulto"
                                type="remote"
                              />
                            </Suspense>
                            <h2 class="card-title">
                              <a href="/product-item">{product.name}</a>
                            </h2>
                            <h3 class="card-subtitle">{product.description}</h3>
                            {/* <div class="card-text">
                              <p>R$ {product.price}</p>
                              <p class="card-label">{product.discount}% OFF</p>
                            </div> */}
                          </Card>
                        )
                      }
                    }
                    }
                  </For>
                </CardGroup>
              </div>
            )}
          </For>
        </div>
      </main>
      <Footer />
    </>
  )
}
