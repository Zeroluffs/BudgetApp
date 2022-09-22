import { AuthProvider } from "../context/auth";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { NavigationBar } from "../components/Navigation/NavigationBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-slate-800 bg-slate-200">
      <AuthProvider>
        <Provider store={store}>
          <NavigationBar />
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
