import { type JSX } from 'solid-js'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { Option } from '../../components/form/option'
import { Selection } from '../../components/form/selection'
import { Textarea } from '../../components/form/textarea'
import { NavBar } from '../../components/navbar'

import { addAddress } from '../../services/address.service'
import { addProduct } from '../../services/product.service'
import { addStock } from '../../services/stock.service'
import { addSupplier } from '../../services/supplier.service'

import './product-registration.css'

interface Product {
  productId?: number
  name?: string
  description?: string
  price?: number
  supplierId?: number
  imageId?: number
  categoryId?: number
}

interface Stock {
  productId?: number
  amount?: number
}

interface Category {
  categoryId?: number
  name?: string
}

interface Supplier {
  supplierId?: number
  corporateName?: string
  tradeName?: string
  cnpj?: string
  email?: string
  commercialPhone?: number
  addressId?: number
}

interface Address {
  addressId?: number
  number?: number
  cep?: string
  uf?: string
  district?: string
  publicPlace?: string
  complement?: string
}

export const ProductRegistration = (): JSX.Element => {
  const product: Product = {}
  const supplier: Supplier = {}
  const address: Address = {}
  const stock: Stock = {}

  // TODO: Montar as categorias
  // const [categories, setCategories] = createSignal<Category[]>([])
  // onMount(() => {
  //   void findAllCategories().then(res => setCategories(res.data))
  // })

  product.categoryId = 0

  const categories: Category[] = [
    { categoryId: 0, name: 'Cachorros' },
    { categoryId: 1, name: 'Gatos' },
    { categoryId: 2, name: 'Outros' }
  ]

  address.uf = 'AC'

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

  const handleProductName = (event: any): void => {
    product.name = event.target.value
  }

  const handleProductAmount = (event: any): void => {
    stock.amount = event.target.value
  }

  const handleProductDescription = (event: any): void => {
    product.description = event.target.value
  }

  const handleProductPrice = (event: any): void => {
    product.price = event.target.value
  }

  const handleProductCategory = (event: any): void => {
    product.categoryId = event.target.value
  }

  const handleSupplierCnpj = (event: any): void => {
    supplier.cnpj = event.target.value
  }

  const handleSupplierCommercialPhone = (event: any): void => {
    supplier.commercialPhone = event.target.value
  }

  const handleSupplierCorporateName = (event: any): void => {
    supplier.corporateName = event.target.value
  }

  const handleSupplierTradeName = (event: any): void => {
    supplier.tradeName = event.target.value
  }

  const handleSupplierEmail = (event: any): void => {
    supplier.email = event.target.value
  }

  const handleCep = (event: any): void => {
    address.cep = event.target.value
  }

  const handleUf = (event: any): void => {
    address.uf = event.target.value
  }

  const handlePublicPlace = (event: any): void => {
    address.publicPlace = event.target.value
  }

  const handleDistrict = (event: any): void => {
    address.district = event.target.value
  }

  const handleNumber = (event: any): void => {
    address.number = event.target.value
  }

  const handleComplement = (event: any): void => {
    address.complement = event.target.value
  }

  async function registerProduct (): Promise<void> {
    const { data: addressData } = await addAddress(address)

    supplier.addressId = addressData.addressId
    const { data: supplierData } = await addSupplier(supplier)

    product.supplierId = supplierData.supplierId
    product.imageId = 1

    const { data: productData } = await addProduct(product)
    stock.productId = productData.productId
    void addStock(stock)
  }

  return (
    <>
      <NavBar />

      <main id="product-registration" class="content container">
        <h1>Cadastre seu produto</h1>
        <p>
          Olá! Para cadastrar o produto no sistema, é necessário que preencha os
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
                onChange={handleProductName}
                required
              />

              <FormField
                id="product_amount"
                name="product_amount"
                type="number"
                text="Quantidade"
                value="1"
                onChange={handleProductAmount}
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
              onChange={handleProductDescription}
              required
            />

            <div class="inline-field">
              <FormField
                id="product_price"
                name="product_price"
                type="number"
                text="Preço do produto"
                step="0.01"
                value="0"
                onChange={handleProductPrice}
                required
              />
              <Selection name="category" id="category" text="Categoria" onChange={handleProductCategory} >
                {categories.map((category: any) => <Option value={category.categoryId} text={category.name} />)}
              </Selection>
            </div>
          </div>

          <div>
            <h3>Fornecedor</h3>

            <div class="inline-field">
              <FormField
                id="corporate_cnpj"
                name="corporate_cnpj"
                type="text"
                text="CNPJ"
                placeholder="CNPJ do fornecedor"
                value=""
                onChange={handleSupplierCnpj}
                required
              />

              <FormField
                id="commercial_phone"
                name="commercial_phone"
                type="text"
                text="Telefone"
                placeholder="Telefone do fornecedor"
                value=""
                onChange={handleSupplierCommercialPhone}
                required
              />
            </div>

            <div class="inline-field">
              <FormField
                id="corporate_name"
                name="corporate_name"
                type="text"
                text="Razão social"
                placeholder="Ex.: Ecommerce Petshop LTDA."
                value=""
                onChange={handleSupplierCorporateName}
                required
              />
              <FormField
                id="fantasy_name"
                name="fantasy_name"
                type="text"
                text="Nome fantasia"
                placeholder="Ex.: E-Pet"
                value=""
                onChange={handleSupplierTradeName}
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
              onChange={handleSupplierEmail}
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
                onChange={handleCep}
                minLength="8"
                maxLength="8"
                required
              />
              <Selection name="uf" id="uf" text="UF" onChange={handleUf} >
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
              onChange={handlePublicPlace}
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
                onChange={handleDistrict}
                required
              />

              <FormField
                id="corporate_number"
                name="corporate_number"
                type="number"
                text="Número"
                placeholder="Ex.: 1"
                value=""
                onChange={handleNumber}
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
              onChange={handleComplement}
              required
            />
          </div>

          <Button type="button" text="Cadastrar" className="btn btn-black" onClick={registerProduct} />
        </Form>
      </main>
      <Footer />
    </>
  )
}
