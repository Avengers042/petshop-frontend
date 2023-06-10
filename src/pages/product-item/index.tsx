import { createSignal, type JSX } from 'solid-js'
import { useNavigate } from 'solid-start/router'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { LazyImage } from '../../components/lazy-image'
import { NavBar } from '../../components/navbar'

import { findProduct } from '../../services/product.service'
import { addPurchase } from '../../services/purchase.service'
import { findUser } from '../../services/user.service'

import './product-item.css'

interface Product {
  productId?: number
  name?: string
  description?: string
  price?: number
  supplierId?: number
  imageId?: number
  categoryId?: number
}

// interface Image {
//   imageId?: number
//   imageName?: string
//   imageAlt?: string
// }

export const ProductItem = (): JSX.Element => {
  const [product, setProduct] = createSignal<Product>({})
  // const [image, setImage] = createSignal<Image>({})
  const [amount, setAmount] = createSignal(0)

  const userId = Number(localStorage.getItem('@EPETAuth:user_id')) ?? null

  setTimeout(() => {
    const url = new URL(window.location.href)
    const productId = Number(url.searchParams.get('productId')) ?? null

    void findProduct(productId).then(res => setProduct(res.data))
  }, 1)

  const handleAmount = (event: any): void => {
    setAmount(event.target.value)
  }

  async function buyProduct (): Promise<void> {
    await findUser(userId).then(res => {
      if (res.data.shoppingCartId !== undefined) {
        void addPurchase({ amount: amount(), shoppingCartId: res.data.shoppingCartId, userId, productId: product().productId })
      }
    })

    const navigate = useNavigate()

    navigate('/shopping-cart', { replace: true })
  }

  function addToCart (): void {
    void findUser(userId).then(res => {
      void addPurchase({ amount: amount(), shoppingCartId: res.data.shoppingCartId, userId, productId: product().productId })
    })
  }

  return (
    <>
      <NavBar />
      <main id="product-item" class="content container">
        <div class="product-header">
          <div class="image-product">
            <LazyImage
              url="granplus-dog_tzvqbg"
              alt="Ração para cachorro adulto"
              type="remote"
            />
          </div>
          <div class="product-main">
            <h1>{product().name}</h1>

            <div class="product-header-main">
              <Form>
                <div class="amount">
                  <FormField
                    id="amount"
                    type="number"
                    text="Quantidade"
                    value="1"
                    name="amount"
                    min="1"
                    onChange={handleAmount}
                    required
                  />
                </div>

                <div class="buttons">
                  <Button type="button" text="Comprar" className="btn btn-black" onClick={() => buyProduct} />
                  <Button
                    type="button"
                    text="Adicionar ao carrinho"
                    className="btn btn-black"
                    onClick={addToCart}
                  />
                </div>
              </Form>

              <div class="price">
                <p>R$ {product().price}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="description">
          <h3>Descrição</h3>
          <p>
            {product().description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
