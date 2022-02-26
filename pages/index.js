import imagePlace from "../public/placeholder.png";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Form from "../components/form";
import Modal from "../components/modal";
import { UsuarioProvider, useUsuario } from "../Context/usuario-context";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { username, cantidad, setCantidad, name, setSonido, message, sonido } =
    useUsuario();
  return (
    // Main div
    <body className="h-screen bg-zinc-800 text-white">
      <div className="mx-10 my-10">
        <Head>
          <title>MisFans | Donacion</title>
        </Head>
        {/* // Username div */}

        <div className="flex items-center p-4">
          <Image
            className="rounded-full"
            src={imagePlace}
            width="25%"
            height="25%"
          ></Image>
          <p className="mx-2 font-medium">{username}</p>
        </div>
        {/* // Elements div */}
        <div className="bg-zinc-900 rounded-xl p-4">
          {/* // Dinero div */}
          <div className="flex border border-zinc-800 p-4 grid">
            {/* // Cantidad div */}
            <div className="grid grid-cols-2 content-start">
              <p className="text-zinc-500 text-xl">$</p>
              <p className="text-2xl font-semibold grow w-4 text-center">
                {cantidad}.00
              </p>
            </div>
            {/* // Botones div */}
            <div className="mt-10 text-center grid grid-cols-4 gap-3">
              <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                onClick={() => {
                  setCantidad(10.00);
                }}
              >
                $10.00
              </button>
              <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                onClick={() => {
                  setCantidad(15.00);
                }}
              >
                $15.00
              </button>
              <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                onClick={() => {
                  setCantidad(20.00);
                }}
              >
                $20.00
              </button>
              <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                onClick={() => {
                  setCantidad(25.00);
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
              <Form/>
              <p></p>
            </div>
            {/* // Sonidos div */}
            <div>
              <h5 className="text-sm mt-2 mb-1">Selecciona un sonido</h5>
              {/* // botones sonidos div */}
              <div className="mt-5 text-center grid grid-cols-4 gap-3">
                <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                  onClick={() => {
                    setSonido("Sonido 1");
                  }}
                >
                  Sound 1
                </button>
                <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                  onClick={() => {
                    setSonido("Sonido 2");
                  }}
                >
                  Sound 2
                </button>
                <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                  onClick={() => {
                    setSonido("Sonido 3");
                  }}
                >
                  Sound 3
                </button>
                <button
                className="bg-zinc-700 rounded p-1 hover:bg-zinc-500"
                  onClick={() => {
                    setSonido("Sonido 4");
                  }}
                >
                  Sound 4
                </button>
              </div>
            </div>
            {/* // Pay div */}
            <div className="">
              <button
               className="bg-violet-500 w-full rounded p-2 mt-3 font-semibold"
               onClick={() => setShowModal(true)}>
                Pagar {cantidad}.00 mxn
              </button>
              <p className="text-xs font-thin w-full text-center mt-1">
                Al continuar, aceptas nuestros términos de servicio y póliticas
                de privacidad.
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
    </body>
  );
}
