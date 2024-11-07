import React from "react";
// import 'dotenv/config';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AdminAddProduct from "./component/page/admin/AdminAddProduct";
// import { ClerkProvider } from "@clerk/clerk-react";
// import AdminAddProduct from "./component/page/admin/AdminAddProduct";
// import Auth from "./component/page/Authentication/Auth";
// import reportWebVitals from './reportWebVitals';

// const PUBLISHABLE_KEY =
//   "pk_test_cHJpbWUtcmluZ3RhaWwtMjIuY2xlcmsuYWNjb3VudHMuZGV2JA";

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />

    //   <Auth/>
    // </ClerkProvider>
);
