import { createSignal, type JSX } from "solid-js";
import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import welcomeOne from "../../assets/welcome-cats-dog-1.jpg";
import welcomeTwo from "../../assets/welcome-cat-dog-2.jpg";
import ListProducts from "./products.json";
import ListServices from "./services.json";
import "./product-list.css";
import { Carousel } from "solid-bootstrap";

export const ProductList = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main class="container content">
        <div class="welcome">
          <Carousel>
            <Carousel.Item>
              <div
                class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                style={{ height: "320px" }}
              >
                <img src={welcomeOne} alt="" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                style={{ height: "320px" }}
              >
                <img src={welcomeTwo} alt="" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div class="list">
          <h1>Nossos serviços</h1>

          <div class="card-group">
          {ListServices.map(service =>
            <div class="service card">
              <img src={service.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
              <h2 class="card-title">{service.name}</h2>
              <h3 class="card-text">{service.description}</h3>
              <button
                class="card-button"
                type="submit"
              >
                Contratar
              </button>
            </div>
          )}
          </div>
        </div>

        <div class="service-list list">
          <h1>Gatos</h1>

          <div class="card-group">
          {ListProducts.map(product =>
            <div class="card">
              <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
              <h2 class="card-title">{product.name}</h2>
              <h3 class="card-subtitle">{product.brand}</h3>
              <p class="card-text">{product.price} - {product.discount}</p>
            </div>
          )}
          </div>
        </div>
        
        <div class="list">
          <h1>Cachorros</h1>

          <div class="card-group">
          {ListProducts.map(product =>
            <div class="card">
              <img src={product.image} alt="Imagem Ração GranPlus Menu para Adultos de Porte Mini" />
              <h2 class="card-title">{product.name}</h2>
              <h3 class="card-subtitle">{product.brand}</h3>
              <div class="card-text">
                <p>R$ {product.price}</p>
                <p class="card-label">{product.discount}% OFF</p>
              </div>
            </div>
          )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};