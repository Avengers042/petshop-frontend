import { For, Suspense, createSignal, onMount, type JSX } from 'solid-js'

import { Footer } from '../../components/footer'
import { LazyImage } from '../../components/lazy-image'
import { NavBar } from '../../components/navbar'
import { Table } from '../../components/table'
import { Tbody } from '../../components/table/tbody'
import { Thead } from '../../components/table/thead'
import { Tr } from '../../components/table/tr'
import { Td } from '../../components/table/tr/td'
import { Th } from '../../components/table/tr/th'

import { findAllProducts } from '../../services/product.service'
import { findAllPurchases } from '../../services/purchase.service'

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
  const [products, setProducts] = createSignal<Product[]>([])
  const [purchases, setPurchases] = createSignal<Purchase[]>([])

  const userId = localStorage.getItem('@EPETAuth:user_id') ?? null

  onMount(() => {
    void findAllPurchases().then(res => {
      setPurchases(res.data.filter(purchase => purchase.userId?.toString() === userId))

      purchases().forEach(purchase => {
        void findAllProducts().then(res => {
          setProducts(res.data.filter(product => product.productId === purchase.productId))

          products().forEach(product => {
            product.amount = purchase.amount ?? 0

            Boolean(product.price) && Boolean(product.amount)
              ? setTotalValue(getTotalValue() + (product.price ?? 0) * (product.amount ?? 0))
              : setTotalValue(0)
          })
        })
      })
    })
  })

  const getValueWithMonetaryMask = (
    value: number,
    locale: string,
    currency: string
  ): string => value.toLocaleString(locale, { style: 'currency', currency })

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
                {(product) => (
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
                          getTotalValue(),
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
            <a href="#" class="btn btn-black">
              Comprar
            </a>
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
