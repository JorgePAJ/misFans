import imagePlace from "../public/placeholder.png";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Form from "../components/form";
import Modal from "../components/modal";
import { UsuarioProvider, useUsuario } from "../Context/usuario-context";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { username, cantidad, setCantidad, name, setSonido,message, sonido } = useUsuario();
  return (
    // Main div
    <div>
      <Head>
        <title>MisFans | Donacion</title>
      </Head>
      {/* // Username div */}
      <p>{username}</p>
      <p>{name}</p>
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
            <h2>{cantidad}</h2>
          </div>
          {/* // Botones div */}
          <div>
            <button
              onClick={() => {
                setCantidad(10);
              }}
            >
              $10.00
            </button>
            <button
              onClick={() => {
                setCantidad(15);
              }}
            >
              $15.00
            </button>
            <button
              onClick={() => {
                setCantidad(20);
              }}
            >
              $20.00
            </button>
            <button
              onClick={() => {
                setCantidad(25);
              }}
            >
              $25.00
            </button>
          </div>
        </div>
        {/* //Info div */}
        <div>
          {/* // Nombre y Mensaje Div */}
          <div>
            <Form />
            <p></p>
          </div>
          {/* // Sonidos div */}
          <div>
            <h5>Selecciona un sonido</h5>
            {/* // botones sonidos div */}
            <div>
              <button
                onClick={() => {
                  setSonido("Sound 1");
                }}
              >
                Sound 1
              </button>
              <button
                onClick={() => {
                  setSonido("Sound 2");
                }}
              >
                Sound 2
              </button>
              <button
                onClick={() => {
                  setSonido("Sound 3");
                }}
              >
                Sound 3
              </button>
              <button
                onClick={() => {
                  setSonido("Sound 4");
                }}
              >
                Sound 4
              </button>
            </div>
          </div>
          {/* // Pay div */}
          <div>
            <button onClick={()=>setShowModal(true)}>Pagar {cantidad} mxn</button>
            <p>
              Al continuar, aceptas nuestros términos de servicio y póliticas de
              privacidad.
            </p>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {name}
              {message}
              {sonido}
              {cantidad}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
