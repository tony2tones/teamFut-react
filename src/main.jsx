import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; 
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
    <App />
    </BrowserRouter>
  </StrictMode>
  </Provider>
);
