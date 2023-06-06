import { useContext, type JSX } from 'solid-js'

import { FormField } from '../../components/form/form-field'
import { Selection } from '../../components/form/selection'
import { NavBar } from '../../components/navbar/index'
import { Option } from '../../components/form/option'
import { Footer } from '../../components/footer'
import { Button } from '../../components/button'
import { Form } from '../../components/form'
import { SignUpContext } from '../../contexts/SignUpContext'

import './user-signup.css'

interface User {
  userId?: number
  firstName?: string
  lastName?: string
  cpf?: string
  email?: string
  birthday?: Date
  password?: string
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

export const UserSignup = (): JSX.Element => {
  const signUp = useContext(SignUpContext)?.signUp

  const user: User = {}
  const address: Address = {}

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

  const handleFirstName = (event: any): void => {
    user.firstName = event.target.value
  }

  const handleLastName = (event: any): void => {
    user.lastName = event.target.value
  }

  const handleEmail = (event: any): void => {
    user.email = event.target.value
  }

  const handleCpf = (event: any): void => {
    user.cpf = event.target.value
  }

  const handlePassword = (event: any): void => {
    user.password = event.target.value
  }

  const handleBirthday = (event: any): void => {
    user.birthday = event.target.value
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

  function signUpUser (): void {
    if (signUp === undefined || user === undefined) {
      throw Error('signUp is undefined')
    }

    const sign = async (): Promise<void> => {
      await signUp(user, address)
    }

    void sign()
  }

  return (
    <>
      <NavBar />
      <main id="user-signup" class="container content">
        <h1>Cadastro de Usuário</h1>
        <Form>
          <div>
            <h3>Usuário</h3>
            <FormField
              id="firstName"
              name="firstName"
              type="text"
              text="Nome"
              placeholder="Seu nome"
              value=""
              onChange={handleFirstName}
              required
            />

            <FormField
              id="lastName"
              name="lastName"
              type="text"
              text="Sobrenome"
              placeholder="Seu sobrenome"
              value=""
              onChange={handleLastName}
              required
            />

            <div class="inline-field">
              <FormField
                id="email"
                name="email"
                type="email"
                text="Email"
                placeholder="Seu email"
                value=""
                onChange={handleEmail}
                required
              />
              <FormField
                id="cpf"
                name="cpf"
                type="number"
                text="CPF"
                placeholder="00000000000"
                value=""
                onChange={handleCpf}
                minLength="11"
                maxLength="11"
                required
              />
            </div>

            <div class="inline-field">
              <FormField
                id="password"
                name="password"
                type="password"
                text="Senha"
                placeholder="Sua senha"
                value=""
                onChange={handlePassword}
                required
              />
              <FormField
                id="birthDate"
                name="birthDate"
                type="date"
                text="Data de nascimento"
                placeholder="Sua data de nascimento"
                value=""
                onChange={handleBirthday}
                required
              />
            </div>
          </div>

          <div>
            <h3>Endereço</h3>
            <div class="inline-field">
              <FormField
                id="cep"
                name="cep"
                type="number"
                text="CEP"
                placeholder="00000000"
                value=""
                onChange={handleCep}
                minLength="8"
                maxLength="8"
                required
              />
              <Selection name="uf" id="uf" onChange={handleUf} text="UF">
                {ufs.map((uf) => (
                  <Option value={uf.acronym} text={uf.name} />
                ))}
              </Selection>
            </div>

            <FormField
              id="publicPlace"
              name="publicPlace"
              type="text"
              text="Logradouro"
              placeholder="Ex.: Quadra 1, Lote J, Entre Quadras (AQ), Área Especial (AE) etc"
              value=""
              onChange={handlePublicPlace}
              required
            />

            <div class="inline-field">
              <FormField
                id="district"
                name="district"
                type="text"
                text="Bairro"
                placeholder="Ex.: Setor Central (Gama)"
                value=""
                onChange={handleDistrict}
                required
              />

              <FormField
                id="number"
                name="number"
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
              id="complement"
              name="complement"
              type="text"
              text="Complemento"
              placeholder="Ex.: Apartamento, Condomínio, etc"
              value=""
              onChange={handleComplement}
              required
            />
          </div>

          <Button type="button" text="Cadastrar" className="btn btn-black" onClick={signUpUser} />
        </Form>
      </main>
      <Footer />
    </>
  )
}
