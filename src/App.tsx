import { Route, Routes } from '@solidjs/router'
import type { Component } from 'solid-js'

import { Login } from './pages/login'
import { ProductList } from './pages/product-list'
import { ProductItem } from './pages/product-item'
import { ProductRegistration } from './pages/product-registration'
import { ShoppingCart } from './pages/shopping-cart'
import { UserSignup } from './pages/user-signup'
import { SignUpProvider } from './contexts/SignUpContext'
import { AuthProvider } from './contexts/AuthContext'

const checkCookies = (): void => {
  if (navigator.cookieEnabled) {
    console.log('Os cookies estão permitidos')
  } else console.log('Necessário permitir os cookies')
}

const App: Component = () => {
  checkCookies()

  return (
    <>
      <AuthProvider>
        <SignUpProvider>
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/*" component={ProductList} />
            <Route path="/product-item" component={ProductItem} />
            <Route path="/product-registration" component={ProductRegistration} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/user-signup" component={UserSignup} />
          </Routes>
        </SignUpProvider>
      </AuthProvider>
    </>
  )
}

export default App
