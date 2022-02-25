import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useUsuario } from "../Context/usuario-context";

function Forms() {
  const { setName, setMessage, name, message } = useUsuario();
  const formik = useFormik({
    initialValues: {
      name: name ,
      message:  message ,
    },
  });
  setName(formik.values.name);
  setMessage(formik.values.message);
  //  console.log("name", name, "message", message);
  return (
    <div>
      <form>
        <label htmlFor="name">
          <h5>Tu nombre</h5>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
        />
        <h5>Escribe un mensaje</h5>
        <label name="message" type="text" />
        <input
          type="text"
          id="message"
          name="message"
          onChange={formik.handleChange}
        />
        <p>&nbsp;</p>
      </form>
    </div>
  );
}

export default Forms;
