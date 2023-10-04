import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <title>하루 5분, 도파민 디펜스</title>
      <Head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11239562685"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11239562685');
</script>
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
        <Script
          id="Meta pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '327776673052335', {external_id: cid});
fbq('track', 'PageView');
    `,
          }}
        />
        ;
      </Head>
      <body style={{ margin: "0px" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
