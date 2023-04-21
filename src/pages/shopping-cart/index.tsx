import { createMemo, For, Suspense, type JSX, createSignal } from 'solid-js'
import { Footer } from '../../components/footer'
import { NavBar } from '../../components/navbar'
import ListProducts from './products-cart.json'
import { LazyImage } from '../../components/lazy-image'
import { Table } from '../../components/table'
import { Thead } from '../../components/table/thead'
import { Tr } from '../../components/table/tr'
import { Td } from '../../components/table/tr/td'
import { Th } from '../../components/table/tr/th'
import { Tbody } from '../../components/table/tbody'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { Button } from '../../components/button'

import './shopping-cart.css'

export const ShoppingCart = (): JSX.Element => {
  const [getTotalValue, setTotalValue] = createSignal(0)
  const products = createMemo(() => ListProducts, [])

  const getValueWithMonetaryMask = (
    value: number,
    locale: string,
    currency: string
  ): string => value.toLocaleString(locale, { style: 'currency', currency })

  products().forEach((product) => {
    setTotalValue(getTotalValue() + product.price * product.quantity)
  })

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
                          url={product.image}
                          alt={product.alt}
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
                          product.price,
                          'pt-BR',
                          'BRL'
                        )}
                      </p>
                    </Td>
                    <Td>
                      <p>{product.quantity}</p>
                    </Td>
                    <Td>
                      <p>
                        {getValueWithMonetaryMask(
                          product.price * product.quantity,
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
              Ir para pagamento
            </a>
            <a href="/" class="btn btn-outline-black">
              Escolher mais produtos
            </a>
          </aside>
        </article>

        <Form>
          <FormField
            id="coupon"
            name="coupon"
            type="text"
            text="Cupom de desconto"
            placeholder="Digite seu cupom"
            value=""
            required
          />
          <FormField
            id="user_cep"
            name="user_cep"
            type="number"
            text="CEP"
            placeholder="00000000"
            value=""
            minLength="8"
            maxLength="8"
            required
          />

          <Button className="btn btn-black" text="Consultar" />
        </Form>
      </main>
      <Footer />
    </>
  )
}
