import Nav from '@/components/Nav/Nav';
import Topbar from '@/components/Topbar/Topbar';
import '@/styles/globals.css';
import { Montserrat, Nunito } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <div
          className={`flex h-screen w-full py-10 items-center justify-between relative  ${nunito.variable} ${montserrat.variable}`}
        >
          <section className="w-64 max-w-52 h-full px-10 border-r-[0.5px] relative">
            <Nav />
          </section>
          <section className="w-full h-full mr-auto px-10 relative flex flex-col">
            <Topbar />
            <Component className="dark:bg-dark h-full" {...pageProps} />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}
