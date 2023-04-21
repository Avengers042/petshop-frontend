import { type JSX } from 'solid-js'

import mastercard_logo from '@assets/mastercard-logo.webp'
import visa_logo from '@assets/visa-logo.webp'
import american_express_logo from '@assets/american-express-logo.webp'
import hipercard_logo from '@assets/hipercard-logo.webp'
import pix_logo from '@assets/pix-logo.webp'
import { LazyImage } from '../../components/lazy-image'

import './footer.css'
export const Footer = (): JSX.Element => {
  return (
    <footer>
      <section class="infos container">
        <div class="payment">
          <h3>Meios de Pagamento</h3>
          <LazyImage url={mastercard_logo} alt="mastercard" type='local' />
          <LazyImage url={visa_logo} alt="visa" type='local' />
          <LazyImage url={american_express_logo} alt="american express" type='local' />
          <LazyImage url={hipercard_logo} alt="hipercard" type='local' />
          <LazyImage url={pix_logo} alt="pix" type='local' />
        </div>

        <div>
          <p>Ecommerce Petshop LTDA.</p>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>
            SIGA Área Especial para Indústria Lote 2/3, Sce St. Leste Industrial
            - Gama, Brasília - DF, 72445-020, Brazil
          </p>
        </div>
      </section>

      <section class="copyright container">
        <p>
          Todos os direitos reservados © 2023 E-Pet LTDA. Todos os direitos
          reservados &copy {new Date().getFullYear()} E-Pet LTDA.
        </p>
      </section>
    </footer>
  )
}
