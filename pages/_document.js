import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* code that you want to add to the header */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" class="fb-customerchat"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v15.0'
                  });
                };
          
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              </script>
              `,
          }}
        />
        <div
          className="fb-customerchat"
          attribution="page_inbox"
          page_id="110501698558413"
        ></div>
      </Html>
    );
  }
}
