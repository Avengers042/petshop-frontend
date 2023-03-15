import { useContext } from "solid-js";
import { AuthContext } from "../contexts/AuthContext";

export function Dashboard() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div class="w-50 m-auto">
      <h1>Bem vindo {user?.name}!</h1>
      <h2>{user?.email}</h2>
      <img src={user?.avatar_url} />
    </div>
  );
}
