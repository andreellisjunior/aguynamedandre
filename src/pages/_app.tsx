import Nav from "@/components/Nav/Nav";
import Topbar from "@/components/Topbar/Topbar";
import "@/styles/globals.css";
import { Montserrat, Nunito } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <div
          className={`flex h-auto w-full min-h-screen py-10 justify-between relative flex-col lg:flex-row  ${nunito.variable} ${montserrat.variable}`}
        >
          <section className="lg:w-64 max-w-52 px-10 lg:relative bg-transparent backdrop-blur-2xl lg:backdrop-blur-none z-10 bottom-0 w-full fixed">
            <Nav />
          </section>
          <section className="w-full h-full mr-auto px-10 border-l-[0.5px] min-h-[700px] relative flex flex-col">
            <Topbar />
            <Component className="dark:bg-dark h-full" {...pageProps} />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}
