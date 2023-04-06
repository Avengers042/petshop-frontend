import { type JSX } from "solid-js";

import "./footer.css";

import mastercard_logo from "../../assets/mastercard-logo.webp";
import visa_logo from "../../assets/visa-logo.webp";
import american_express_logo from "../../assets/american-express-logo.webp";
import hipercard_logo from "../../assets/hipercard-logo.webp";
import pix_logo from "../../assets/pix-logo.webp";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <section class="infos">
        <div>
          Meios de Pagamento <br />
          <img src={mastercard_logo} alt="mastercard" style="height: 24px" />
          <img src={visa_logo} alt="visa" style="height: 24px" />
          <img src={american_express_logo} alt="american express" style="height: 24px" />
          <img src={hipercard_logo} alt="hipercard" style="height: 24px" />
          <img src={pix_logo} alt="pix" style="height: 24px" />
        </div>

        <div>
          Ecommerce Petshop LTDA. <br />
          CNPJ: 00.000.000/0000-00 <br />
          SIGA Área Especial para Indústria Lote 2/3, Sce St. Leste Industrial -
          Gama, Brasília - DF, 72445-020, Brazil
        </div>
      </section>

      <section class="copyright">
        <hr />
        Todos os direitos reservados &copy 2023 E-Pet LTDA.
      </section>
    </footer>
  );
};
