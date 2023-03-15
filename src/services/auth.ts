import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) => {
  new Promise((resolve) => setTimeout(resolve, amount));
};

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid.toString(),
    user: {
      name: "Fulano de Tal",
      email: "fulano@gmail.com",
      avatar_url: "https://www.github.com/wesleyclaudino.png",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: "Fulano de Tal",
      email: "fulano@gmail.com",
      avatar_url: "https://www.github.com/wesleyclaudino.png",
    },
  };
}
