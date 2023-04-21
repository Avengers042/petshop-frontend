import { type JSX } from 'solid-js'
import { NavBar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { Button } from '../../components/button'
import { Textarea } from '../../components/form/textarea'
import { Selection } from '../../components/form/selection'
import { Option } from '../../components/form/option'
import './product-registration.css'

export const ProductRegistration = (): JSX.Element => {
  const ufs = [
    { name: 'Acre (AC)', acronym: 'AC' },
    { name: 'Alagoas (AL)', acronym: 'AL' },
    { name: 'Amapá (AP)', acronym: 'AP' },
    { name: 'Amazonas (AM)', acronym: 'AM' },
    { name: 'Bahia (BA)', acronym: 'BA' },
    { name: 'Ceará (CE)', acronym: 'CE' },
    { name: 'Distrito Federal (DF)', acronym: 'DF' },
    { name: 'Espírito Santo (ES)', acronym: 'ES' },
    { name: 'Goiás (GO)', acronym: 'GO' },
    { name: 'Maranhão (MA)', acronym: 'MA' },
    { name: 'Mato Grosso (MT)', acronym: 'MT' },
    { name: 'Mato Grosso do Sul (MS)', acronym: 'MS' },
    { name: 'Minas Gerais (MG)', acronym: 'MG' },
    { name: 'Pará (PA)', acronym: 'PA' },
    { name: 'Paraíba (PB)', acronym: 'PB' },
    { name: 'Paraná (PR)', acronym: 'PR' },
    { name: 'Pernambuco (PE)', acronym: 'PE' },
    { name: 'Piauí (PI)', acronym: 'PI' },
    { name: 'Rio de Janeiro (RJ)', acronym: 'RJ' },
    { name: 'Rio Grande do Norte (RN)', acronym: 'RN' },
    { name: 'Rio Grande do Sul (RS)', acronym: 'RS' },
    { name: 'Rondônia (RO)', acronym: 'RO' },
    { name: 'Roraima (RR)', acronym: 'RR' },
    { name: 'Santa Catarina (SC)', acronym: 'SC' },
    { name: 'São Paulo (SP)', acronym: 'SP' },
    { name: 'Sergipe (SE)', acronym: 'SE' },
    { name: 'Tocantins (TO)', acronym: 'TO' }
  ]

  return (
    <>
      <NavBar />

      <main id="product-registration" class="content container">
        <h1>Cadastre seu produto</h1>
        <p>
          Olá! Para cadastrar o produto do sistema, é necessário que preencha os
          campos do formulário abaixo e será atualizado na plataforma o mais
          rápido possível
        </p>

        <Form>
          <div>
            <h3>Produto</h3>
            <div class="inline-field">
              <FormField
                id="product_name"
                name="product_name"
                type="text"
                text="Nome do produto"
                placeholder="Digite o nome do produto"
                value=""
                required
              />

              <FormField
                id="product_amount"
                name="product_amount"
                type="number"
                text="Quantidade"
                value="1"
                className="number"
                required
              />
            </div>

            <Textarea
              id="product_description"
              name="product_description"
              text="Descrição do produto"
              placeholder="Digite a descrição do produto"
              value=""
              required
            />

            <FormField
              id="product_price"
              name="product_price"
              type="number"
              text="Preço do produto"
              step="0.01"
              value="0"
              required
            />
          </div>

          <div>
            <h3>Fornecedor</h3>

            <FormField
              id="corporate_cnpj"
              name="corporate_cnpj"
              type="text"
              text="CNPJ"
              placeholder="CNPJ do fornecedor"
              value=""
              required
            />

            <div class="inline-field">
              <FormField
                id="corporate_name"
                name="corporate_name"
                type="text"
                text="Razão social"
                placeholder="Ex.: Ecommerce Petshop LTDA."
                value=""
                required
              />
              <FormField
                id="fantasy_name"
                name="fantasy_name"
                type="text"
                text="Nome fantasia"
                placeholder="Ex.: E-Pet"
                value=""
                required
              />
            </div>

            <FormField
              id="corporate_email"
              name="corporate_email"
              type="email"
              text="Email do fornecedor"
              placeholder="Digite a descrição do produto"
              value=""
              required
            />
          </div>

          <div>
            <h3>Endereço do Fornecedor</h3>
            <div class="inline-field">
              <FormField
                id="corporate_addr_cep"
                name="corporate_addr_cep"
                type="number"
                text="CEP"
                placeholder="00000000"
                value=""
                minLength="8"
                maxLength="8"
                required
              />
              <Selection name="uf" id="uf" text="UF">
                {ufs.map(uf => <Option value={uf.acronym} text={uf.name} />)}
              </Selection>
            </div>

            <FormField
              id="corporate_public_place"
              name="corporate_public_place"
              type="text"
              text="Logradouro"
              placeholder="Ex.: Quadra 1, Lote J, Entre Quadras (AQ), Área Especial (AE) etc"
              value=""
              required
            />

            <div class="inline-field">
              <FormField
                id="corporate_area"
                name="corporate_area"
                type="text"
                text="Bairro"
                placeholder="Ex.: Setor Central (Gama)"
                value=""
                required
              />

              <FormField
                id="corporate_number"
                name="corporate_number"
                type="number"
                text="Número"
                placeholder="Ex.: 1"
                value=""
                className="number"
                required
              />
            </div>

            <FormField
              id="corporate_complement"
              name="corporate_complement"
              type="text"
              text="Complemento"
              placeholder="Ex.: Apartamento, Condomínio, etc"
              value=""
              required
            />
          </div>

          <Button text="Cadastrar" className="btn btn-black" />
        </Form>
      </main>
      <Footer />
    </>
  )
}
