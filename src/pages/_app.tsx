import { MetaMaskProvider } from 'metamask-react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

// import MetaMaskAccountProvider from '../components/MetaMaskAccountProvider';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MetaMaskProvider>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </MetaMaskProvider>
);

export default MyApp;
