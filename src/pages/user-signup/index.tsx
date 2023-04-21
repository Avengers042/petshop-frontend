import { type JSX } from 'solid-js'
import { NavBar } from '../../components/navbar/index'
import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { Button } from '../../components/button'
import { FormField } from '../../components/form/form-field'
import { Selection } from '../../components/form/selection'
import { Option } from '../../components/form/option'

import './user-signup.css'

export const UserSignup = (): JSX.Element => {
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
      <main id="user-signup" class="container content">
        <h1>Cadastro de Usuário</h1>
        <Form>
          <div>
            <h3>Usuário</h3>
            <FormField
              id="user_first_name"
              name="user_first_name"
              type="text"
              text="Nome"
              placeholder="Seu nome"
              value=""
              required
            />

            <FormField
              id="user_last_name"
              name="user_last_name"
              type="text"
              text="Sobrenome"
              placeholder="Seu sobrenome"
              value=""
              required
            />

            <FormField
              id="user_email"
              name="user_email"
              type="email"
              text="Email"
              placeholder="Seu email"
              value=""
              required
            />

            <div class="inline-field">
              <FormField
                id="user_password"
                name="user_password"
                type="password"
                text="Senha"
                placeholder="Sua senha"
                value=""
                required
              />
              <FormField
                id="user_birth"
                name="user_birth"
                type="date"
                text="Data de nascimento"
                placeholder="Sua data de nascimento"
                value=""
                required
              />
            </div>
          </div>

          <div>
            <h3>Endereço</h3>
            <div class="inline-field">
              <FormField
                id="user_addr_cep"
                name="user_addr_cep"
                type="number"
                text="CEP"
                placeholder="00000000"
                value=""
                minLength="8"
                maxLength="8"
                required
              />
              <Selection name="uf" id="uf" text="UF">
                {ufs.map((uf) => (
                  <Option value={uf.acronym} text={uf.name} />
                ))}
              </Selection>
            </div>

            <FormField
              id="user_public_place"
              name="user_public_place"
              type="text"
              text="Logradouro"
              placeholder="Ex.: Quadra 1, Lote J, Entre Quadras (AQ), Área Especial (AE) etc"
              value=""
              required
            />

            <div class="inline-field">
              <FormField
                id="user_area"
                name="user_area"
                type="text"
                text="Bairro"
                placeholder="Ex.: Setor Central (Gama)"
                value=""
                required
              />

              <FormField
                id="user_number"
                name="user_number"
                type="number"
                text="Número"
                placeholder="Ex.: 1"
                value=""
                className="number"
                required
              />
            </div>

            <FormField
              id="user_complement"
              name="user_complement"
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
