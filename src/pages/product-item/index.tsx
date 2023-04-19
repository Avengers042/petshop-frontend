import { Footer } from '../../components/footer'
import { NavBar } from '../../components/navbar'
import { type JSX } from 'solid-js'
import { Image } from '../../components/image'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { Button } from '../../components/button'
import './product-item.css'

export const ProductItem = (): JSX.Element => {
/*   const [validated, setValidated] = createSignal<boolean>(false)
  const [url, setNewUrl] = createSignal<string>('/')

  const navigate = useNavigate()

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget
    if ((form as HTMLFormElement).checkValidity()) {
      navigate(url(), { replace: true })
    }
    setValidated(true)
  } */
  return (
    <>
      <NavBar />
      <main id="product-item" class="content">
        <div class="container">
          <div class="product-header">
            <div class="image-product">
              <Image alt='Imagem do produto Ração para cachorro adulto' url='granplus-dog_tzvqbg' />
            </div>
            <div class="product-main">
              <h1>Ração GranPlus Choice Frango e Carne para Cães Adultos</h1>

              <div class="product-header-main">
                <Form>
                  <div class="weight">
                    <p>Tamanhos</p>
                    <FormField id='weight-10' type='radio' text='10 kg' name='weight' required />
                    <FormField id='weight-15' type='radio' text='15 kg' name='weight' required />
                    <FormField id='weight-20' type='radio' text='20 kg' name='weight' required />
                  </div>

                  <div class="amount">
                    <FormField id='amount' type='number' text='Quantidade' value='1' name='amount' required />
                  </div>

                  <div class="buttons">
                    <Button type='submit' text='Comprar' className='black' />
                    <Button type='submit' text='Adicionar ao carrinho' className='black' />
                  </div>
                </Form>

                <div class="price">
                  <p>R$ 119.99</p>
                  <p class="label">10% OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div class="description">
            <h3>Descrição</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et urna eu lacus placerat posuere vitae et nisl. Sed non orci hendrerit, vestibulum ante id, feugiat orci. Sed quis felis tincidunt, efficitur metus quis, facilisis nibh. Phasellus non justo eget dolor aliquet aliquam. Curabitur eget cursus neque. Aenean aliquet leo elit, porta rhoncus velit tincidunt et. Integer pretium, purus sed ornare euismod, ante leo auctor diam, sed pretium mi lorem at nisl. Mauris vel aliquam nulla. Praesent ornare felis sit amet eros semper accumsan.</p>
            <p>Fusce finibus consequat mollis. Aliquam finibus lectus nec velit accumsan, a eleifend elit fringilla. Mauris at lacus sit amet nisl malesuada tempor. Aliquam erat volutpat. In consectetur pellentesque tempus. Praesent a lorem in risus gravida bibendum et in orci. Sed ante justo, ornare et tortor at, auctor ullamcorper lectus. Praesent enim sapien, pellentesque sit amet justo ut, pharetra ullamcorper libero. Aliquam pellentesque, urna eget faucibus pulvinar, arcu est tempor sem, ut condimentum odio risus non odio. Donec pulvinar mi non eros accumsan cursus. Integer risus est, tristique molestie eleifend sit amet, elementum bibendum risus. Vestibulum volutpat nibh in iaculis convallis. Proin imperdiet aliquam massa, ut semper dui.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
