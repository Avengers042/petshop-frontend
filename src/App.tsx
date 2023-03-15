import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";

import styles from "./App.module.css";
import { AuthProvider } from "./contexts/AuthContext";
import { Dashboard } from "./dashboard";
import { Login } from "./login";

function checkCookies() {
  if (navigator.cookieEnabled == true)
    console.log("Os cookies estão permitidos");
  else console.log("Necessário permitir os cookies");
}

const App: Component = () => {
  checkCookies();

  return (
    <>
      <AuthProvider>
        <div class={styles.App}>
          <Routes>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
