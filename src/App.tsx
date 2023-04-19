import { Route, Routes } from '@solidjs/router'
import type { Component } from 'solid-js'

import { Login } from './pages/login'
import { ProductList } from './pages/product-list'
import { ProductItem } from './pages/product-item'
import { ProductRegistration } from './pages/product-registration'
/* import { SignUpProvider } from './contexts/SignUpContext'
import { ShoppingCart } from './pages/shopping-cart'
import { UserSignup } from './pages/user-signup' */

const checkCookies = (): void => {
  if (navigator.cookieEnabled) {
    console.log('Os cookies estão permitidos')
  } else console.log('Necessário permitir os cookies')
}

const App: Component = () => {
  checkCookies()

  return (
    <>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/*" component={ProductList} />
        <Route path="/product-item" component={ProductItem} />
        <Route
          path="/product-registration"
          component={ProductRegistration}
        />
        {/* <SignUpProvider>
              <Route path="/user-signup" component={UserSignup} />
            </SignUpProvider>
            <Route path="/shopping-cart" component={ShoppingCart} /> */}
      </Routes>
    </>
  )
}

export default App
