import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useFormik } from "formik";
import { name, message } from "../constants/global";

function Forms(props) {
  const nameProp = props.name;
  const formik = useFormik({
    initialValues: {
      name: { nameProp },
      message: "",
    },
  });
  console.log("form values", formik.values.name);
  name = formik.values.name;
  message = formik.values.message;
  console.log("name", name, "message", message);
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
