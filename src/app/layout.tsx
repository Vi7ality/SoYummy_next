import type { Metadata } from 'next';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux';
import { GlobalStyle } from '../GlobalStyle';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'So Yummy',
  description: 'Find your yummy recipe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href="%PUBLIC_URL%/android-chrome-192x192.png"
        />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* <script type="text/javascript">
     
      (function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search
            .slice(1)
            .split('&')
            .map(function (s) {
              return s.replace(/~and~/g, '&');
            })
            .join('?');
          window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      })(window.location);
    </script> */}
      </head>
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider store={store}>
            <div id="root">{children}</div>
            <GlobalStyle />
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
