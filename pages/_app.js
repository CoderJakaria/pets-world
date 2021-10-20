// import 'tailwindcss/tailwind.css'
import "../styles/global.css";
import { Provider } from "next-auth/client";
import store from "../lib/redux/store";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
