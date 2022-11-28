import '../styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </PayPalScriptProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize () => {
      tawkMessengerRef.current.minimize();
      const onLoad = () => {
        console.log('onLoad works!');
    };
  return (
    <div className="App">
    <button onClick={handleMinimize}> Minimize the Chat </button>
      <TawkMessengerReact
        propertyId="6384095bdaff0e1306d9b847"
        widgetId="1gits94i1"
      />
    </div>
  );
}
}
export default MyApp;
