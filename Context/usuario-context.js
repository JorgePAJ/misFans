import React, { useState, useEffect, useMemo } from "react";
const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
  const [name, setName] = useState("WaberHoruhe");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("Jorge Plasencia");
  const [cantidad, setCantidad] = useState(10);
  const [sonido, setSonido] = useState("Sound 1");

  const value = () => {
    return {
      name,
      setName,
      message,
      setMessage,
      username,
      setUsername,
      cantidad,
      setCantidad,
      sonido,
      setSonido,
    };
  };

  return (
    <UsuarioContext.Provider value={value() } {...props}>
      {props.children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
    throw new Error(
      "useUsuario debe estar dentro del proveedor UsuarioContext"
    );
  }
  return context;
}
