import HeadElement from '@/components/layout/HeadElement';
import { store } from '@/store/store';
import '@/styles/globals.css';
import '@/styles/backgrounds.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'; // toast css
import { ToastContainer } from 'react-toastify';
import GetUserSession from '@/components/layout/GetUserSession';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeadElement />
      <Component {...pageProps} />
      <GetUserSession />
      <ToastContainer
        style={{
          fontSize: 16,
          zIndex: 30,
        }}
        theme='colored'
        autoClose={5000}
        position='top-right'
        hideProgressBar={true}
        closeOnClick={true}
      />
    </Provider>
  );
}
