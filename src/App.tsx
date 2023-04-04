import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";

import styles from "./App.module.css";
import { AuthProvider } from "./contexts/AuthContext";
import { SignUpProvider } from "./contexts/SignUpContext";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { ProductList } from "./pages/product-list";
import { ProductRegistration } from "./pages/product-registration";
import { ShoppingCart } from "./pages/shopping-cart";
import { UserSignup } from "./pages/user-signup";

const checkCookies = (): void => {
  if (navigator.cookieEnabled) {
    console.log("Os cookies estão permitidos");
  } else console.log("Necessário permitir os cookies");
};

const App: Component = () => {
  checkCookies();

  return (
    <>
      <AuthProvider>
        <div class={styles.App}>
          <Routes>
            <Route path="/*" component={Login} />
            <Route path="/login" component={Login} />
            <SignUpProvider>
              <Route path="/user-signup" component={UserSignup} />
            </SignUpProvider>
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/product-registration"
              component={ProductRegistration}
            />
            <Route path="/product-list" component={ProductList} />
            <Route path="/shopping-cart" component={ShoppingCart} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
