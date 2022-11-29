import Script from 'next/script';
function Tawkapp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script id="tawk" strategy="lazyOnload">
        {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/[6384095bdaff0e1306d9b847]/[1gits94i1]';
              s1.charset='UTF-8';
              s1.setAttributy
              e('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();  
          `}
      </Script>
    </>
  );
}

export default Tawkapp;
