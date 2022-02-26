import { UsuarioProvider } from "../Context/usuario-context";
import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    
    <UsuarioProvider>
      <Component {...pageProps} />
    </UsuarioProvider>
  );
};

export default App;
