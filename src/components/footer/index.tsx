import { type JSX } from 'solid-js'

import './footer.css'

import mastercard_logo from '@assets/mastercard-logo.webp'
import visa_logo from '@assets/visa-logo.webp'
import american_express_logo from '@assets/american-express-logo.webp'
import hipercard_logo from '@assets/hipercard-logo.webp'
import pix_logo from '@assets/pix-logo.webp'

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <section class="infos container">
        <div class="payment">
          <h3>Meios de Pagamento</h3>
          <img src={mastercard_logo} alt="mastercard" />
          <img src={visa_logo} alt="visa" />
          <img
            src={american_express_logo}
            alt="american express"
          />
          <img src={hipercard_logo} alt="hipercard" />
          <img src={pix_logo} alt="pix" />
        </div>

        <div>
          <p>Ecommerce Petshop LTDA.</p>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>SIGA Área Especial para Indústria Lote 2/3, Sce St. Leste Industrial - Gama, Brasília - DF, 72445-020, Brazil</p>
        </div>
      </section>

      <section class="copyright container">
        <p>Todos os direitos reservados © 2023 E-Pet LTDA. Todos os direitos reservados &copy {new Date().getFullYear()} E-Pet LTDA.</p>
      </section>
    </footer>
  )
}
