import { type JSX, useContext } from 'solid-js'
import { AuthContext } from '../contexts/AuthContext'

export const Dashboard = (): JSX.Element => {
  const value = useContext(AuthContext)
  const user = value?.user

  if ((user) == null) { return <p>No user found</p> }

  return (
    <div class="w-50 m-auto">
      <h1>Bem vindo {user.name}!</h1>
      <h2>{user.email}</h2>
      <img src={user.avatar_url} />
    </div>
  )
}
