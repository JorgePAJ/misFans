import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/modal.module.css";
import { UsuarioProvider, useUsuario } from "../Context/usuario-context";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const {name, message, cantidad, sonido} = useUsuario();
  const modalContent = show ? (
    <div className="text-white absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur ">
      <div className="bg-zinc-900 border rounded-lg p-5 w-1/2 h-1/2">
        <div className="flex justify-end text-2xl">
          <a href="#" onClick={handleClose}>
            <button>X</button>
          </a>
        </div>
        <div className="pt-10 grid grid-rows-4">
          <div className="text-center font-semibold text-5xl">¡Gracias {name}!</div>
          <div className="text-center font-thin">Haz enviado ${cantidad}.00 con el {sonido}</div>
          <div className="text-center font-medium text-xl ">"{message}"</div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
