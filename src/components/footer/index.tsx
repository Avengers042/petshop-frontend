import { type JSX } from "solid-js";

import "./footer.css";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <section class="infos">
        <div>
          Meios de Pagamento <br />
          <img src="/src/assets/mastercard-logo.webp" alt="mastercard" style="height: 24px" />
          <img src="/src/assets/visa-logo.webp" alt="visa" style="height: 24px" />
          <img
            src="/src/assets/american-express-logo.png"
            alt="american express" style="height: 24px"
          />
          <img src="/src/assets/hipercard-logo.png" alt="hipercard" style="height: 24px" />
          <img src="/src/assets/pix-logo.png" alt="pix" style="height: 24px" />
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
