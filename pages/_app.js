import "@/styles/globals.css";
import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}
