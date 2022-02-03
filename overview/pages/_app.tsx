import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>minung.han</footer>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}

export default MyApp;
