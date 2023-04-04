import { Carousel } from "solid-bootstrap";
import { type JSX } from "solid-js";

export const ProductList = (): JSX.Element => {
  return (
    <div class="w-50 m-auto">
      <Carousel>
        <Carousel.Item>
          <div
            class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
          ></div>
          <Carousel.Caption>
            <h2>Primeiro produto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, quos possimus aspernatur accusantium asperiores
              aliquam, itaque error quia velit impedit nobis animi repellat
              accusamus. Quos dolorum harum eaque rerum veniam.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
          ></div>

          <Carousel.Caption>
            <h2>Segundo produto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              maxime, odio quod voluptatum architecto perspiciatis expedita ab
              repellendus perferendis provident sit. Pariatur placeat
              consequuntur ad facere molestiae reprehenderit cumque eligendi.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
          ></div>

          <Carousel.Caption>
            <h2>Terceiro produto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit assumenda culpa laboriosam id quasi? Dolorum error
              ipsam officia, porro consectetur ad deleniti aut, nulla, dolor
              veritatis odio vel perferendis in!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};