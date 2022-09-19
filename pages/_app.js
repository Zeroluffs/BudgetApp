import { AuthProvider } from "../context/auth";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
