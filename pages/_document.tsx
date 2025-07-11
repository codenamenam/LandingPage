import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
const gtag = `https://www.googletagmanager.com/gtag/js?id=`;

export default function Document() {
  return (
    <Html lang="en">
      <title>하루 5분, 도파민 디펜스</title>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="description"
          content="하루 5분, AI가 길러주는 문해력"
        ></meta>
        <meta
          name="keywords"
          content="문해력, 도파민 디펜스, 도파민 디톡스"
        ></meta>
        <meta
          name="google-site-verification"
          content="DnlPSmw_TfyIvECuUFKABiKJaWb_2QHPqLDFXGaHlYE"
        />
        <Script
          id="channelTalk"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "cc8f51a2-62db-4a28-a5cb-bce2b87ebf3c"
  });
	`,
          }}
        />
        ;
        <Script
          id="Hotjar"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3646201,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
          }}
        />

      </Head>
      <body style={{ margin: "0px" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
