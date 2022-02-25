import { UsuarioProvider } from "../Context/usuario-context";

const App = ({ Component, pageProps }) => {
  return (
    
    <UsuarioProvider>
      <Component {...pageProps} />
    </UsuarioProvider>
  );
};

export default App;
