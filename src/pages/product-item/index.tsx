import { onMount, type JSX, createSignal } from 'solid-js'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { LazyImage } from '../../components/lazy-image'
import { NavBar } from '../../components/navbar'

import { findProduct } from '../../services/product.service'

import './product-item.css'
import { updateShoppingCart } from '../../services/shopping-cart.service'
import { useNavigate } from 'solid-start/router'

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

  onMount(() => {
    void findProduct(1).then(res => setProduct(res.data))
    // void findImage(1).then(res => setImage(res.data))
  })

  const handleAmount = (event: any): void => {
    setAmount(event.target.value)
  }

  function buyProduct (): void {
    // funcao de comprar produto passando o mesmo
    const navigate = useNavigate()
    navigate('/shopping-cart', { replace: true })
  }

  function addToCart (): void {
    void updateShoppingCart({
      // shoppingCartId: user.shoppingCartId,
      shoppingCartId: 1,
      productId: product().productId,
      amount: amount()
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
                  <Button type="button" text="Comprar" className="btn btn-black" onClick={buyProduct} />
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
