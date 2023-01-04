import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/pagination";

import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
