import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useUsuario } from "../Context/usuario-context";

function Forms() {
  const { setName, setMessage, name, message } = useUsuario();
  const formik = useFormik({
    initialValues: {
      name: name,
      message: message,
    },
  });
  setName(formik.values.name);
  setMessage(formik.values.message);
  //  console.log("name", name, "message", message);
  return (
    <div>
      <form>
        <label htmlFor="name">
          <h5 className="text-sm mt-2 mb-1">Tu nombre</h5>
        </label>
        <input
          className="bg-transparent border border-zinc-800 w-full my-1 p-2 placeholder:text-zinc-500"
          type="text"
          id="name"
          placeholder="Escribe tu nombre"
          name="name"
          onChange={formik.handleChange}
        />
        <h5 className="text-sm mt-2 mb-1">Escribe un mensaje</h5>
        <label name="message" type="text" />
        <input
          className="text-top pl-1 align-top bg-transparent border pb-24 border-zinc-800 w-full h-32 my-1  placeholder:text-zinc-500"
          type="text"
          id="message"
          name="message"
          placeholder="Este mensaje aparecera en la alerta"
          onChange={formik.handleChange}
        />
        <p>&nbsp;</p>
      </form>
    </div>
  );
}

export default Forms;
