"use client";
import MainNav from "@/components/MainNav";
import "../dist/css/styles.css";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "@/store/index";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>OnGrill</title>
      </head>
      <body>
        <Provider store={store}>
          <MainNav />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
