import { For, Suspense, createMemo, createSignal, type JSX } from 'solid-js'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { LazyImage } from '../../components/lazy-image'
import { NavBar } from '../../components/navbar'
import { Table } from '../../components/table'
import { Tbody } from '../../components/table/tbody'
import { Thead } from '../../components/table/thead'
import { Tr } from '../../components/table/tr'
import { Td } from '../../components/table/tr/td'
import { Th } from '../../components/table/tr/th'

import { buyItems } from '../../services/shopping-cart.service'
import { findAllPurchases } from '../../services/purchase.service'

import ListProducts from './products-cart.json'

import './shopping-cart.css'

interface Product {
  productId?: number
  name?: string
  description?: string
  price?: number
  amount?: number
  supplierId?: number
  imageId?: number
  categoryId?: number
}

interface Purchase {
  purchaseId?: number
  amount?: number
  shoppingCartId?: number
  userId?: number
  productId?: number
}

export const ShoppingCart = (): JSX.Element => {
  const [getTotalValue, setTotalValue] = createSignal(0)
  const [purchases, setPurchases] = createSignal<Purchase[]>([])
  // const [products] = createSignal<Product[]>([])
  const products = createMemo<Product[]>(() => ListProducts, [])

  const userId = localStorage.getItem('@EPETAuth:user_id') ?? null

  void findAllPurchases().then(res => {
    setPurchases(res.data.filter(purchase => purchase.userId?.toString() === userId))
    // void findProducts()
  })

  // const findProducts = async (): Promise<void> => {
  //   const allProducts = await findAllProducts()

  //   purchases().forEach(purchase => {
  //     const filteredProduct: Product = allProducts.data.filter(product => product.productId === purchase.productId)[0]

  //     if (filteredProduct !== undefined) {
  //       filteredProduct.amount = purchase.amount ?? 0
  //       products().push(filteredProduct)

  products().forEach(product => {
    Boolean(product.price) && Boolean(product.amount)
      ? setTotalValue(getTotalValue() + (product.price ?? 0) * (product.amount ?? 0))
      : setTotalValue(0)
  })
  //   }
  // })

  //   console.log('internal products: ', products())
  // }

  // console.log('external products: ', products())

  const getValueWithMonetaryMask = (
    value: number,
    locale: string,
    currency: string
  ): string => value.toLocaleString(locale, { style: 'currency', currency })

  const getTotalValueProduct = (product: Product): number => {
    return Boolean(product.price) && Boolean(product.amount)
      ? (product.price ?? 0) * (product.amount ?? 0)
      : 0
  }

  function handleBuy (): void {
    console.log(purchases())
    void buyItems(purchases())
  }

  return (
    <>
      <NavBar />

      <main id="shopping-cart" class="container content">
        <h1>Carrinho de compras</h1>
        <article>
          <Table>
            <Thead>
              <Tr>
                <Th> </Th>
                <Th>Nome</Th>
                <Th>Preço</Th>
                <Th>Quantidade</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <For each={products()}>
                {product => (
                  <Tr>
                    <Td>
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage
                          url="granplus-dog_tzvqbg"
                          alt="Ração para cachorro adulto"
                          type="remote"
                        />
                      </Suspense>
                    </Td>
                    <Td>
                      <p>{product.name}</p>
                    </Td>
                    <Td>
                      <p>
                        {getValueWithMonetaryMask(
                          product.price ?? 0,
                          'pt-BR',
                          'BRL'
                        )}
                      </p>
                    </Td>
                    <Td>
                      <p>{product.amount ?? 0}</p>
                    </Td>
                    <Td>
                      <p>
                        {getValueWithMonetaryMask(
                          getTotalValueProduct(product),
                          'pt-BR',
                          'BRL'
                        )}
                      </p>
                    </Td>
                  </Tr>
                )}
              </For>
            </Tbody>
          </Table>
          <aside>
            <h1>TOTAL</h1>
            <p>{getValueWithMonetaryMask(getTotalValue(), 'pt-BR', 'BRL')}</p>
            <Button type="button" text="Comprar" className="btn btn-black" onClick={handleBuy} />
            <a href="/" class="btn btn-outline-black">
              Escolher mais produtos
            </a>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  )
}
