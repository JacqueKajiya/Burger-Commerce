import Global from "./styles/global";

import { RoutesMain } from "./routes";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  return (
    <>
      <Global />
        <UserProvider>
          <CartProvider>
            <RoutesMain/> 
          </CartProvider>
        </UserProvider>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light" />
    </>
  );
}

export default App;
