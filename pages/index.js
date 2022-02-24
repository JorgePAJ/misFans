import imagePlace from "../public/placeholder.png";
import Image from "next/image";
export default function Home() {
  return (
    // Main div
    <div>
      {/* // Username div */}
      <p>Username</p>
      <Image src={imagePlace} width="100%" height="100%"></Image>
      <div></div>
      {/* // Elements div */}
      <div>
        {/* // Dinero div */}
        <div>
          {/* // Cantidad div */}
          <div>
            <p>$</p>
            {/* cantidad seleccionada VARIABLE */}
            <h2>{}</h2>
          </div>
          {/* // Botones div */}
          <div>
            <button>$10.00</button>
            <button>$15.00</button>
            <button>$20.00</button>
            <button>$25.00</button>
          </div>
        </div>
        {/* //Info div */}
        <div>
          {/* // Nombre y Mensaje Div */}
          <div>
            {/* // Nombre div */}
            <div>
              <h5>Tu nombre</h5>
              <p>aqui va un form</p>
            </div>
            {/* // Mensaje div */}
            <div>
              <h5>Escribe un mensaje</h5>
              <p>aqui va un form</p>
            </div>
          </div>
          {/* // Sonidos div */}
          <div>
            <h5>Selecciona un sonido</h5>
            {/* // botones sonidos div */}
            <div>
            <button>Sound 1</button>
            <button>Sound 2</button>
            <button>Sound 3</button>
            <button>Sound 4</button>
            </div>
          </div>
          {/* // Pay div */}
          <div>
            <button>Pagar cantidad  mxn</button>
            <p>Al continuar, aceptas nuestros términos de servicio y póliticas de privacidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
