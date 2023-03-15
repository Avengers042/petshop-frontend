import { parseCookies, setCookie } from "nookies";
import { createContext, createEffect, createSignal } from "solid-js";
import { useNavigate } from "solid-start/router";

import { recoverUserInformation, signInRequest } from "../services/auth";

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isAutenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = (props: any) => {
  const [getUser, setUser] = createSignal<User | null>(null);

  const isAutenticated = !!getUser;

  createEffect(() => {
    const { petshop_token: token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  const navigate = useNavigate();

  async function signIn({ email, password }: SignInData): Promise<void> {
    const { token, user } = await signInRequest({ email, password });

    setCookie(undefined, "petshop_token", token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    setUser(user);

    if (isAutenticated) {
      console.log("Autenticado com sucesso");
      navigate("/dashboard", { replace: true });
    } else {
      console.log("Não Autenticado, acesso negado");
    }
  }

  return (
    <AuthContext.Provider value={{ user: getUser(), isAutenticated, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
