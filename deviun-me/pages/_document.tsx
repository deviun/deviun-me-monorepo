import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
            body {
              margin: 0;
            }

            body, body * {
              font-family: Helvetica;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              <!-- Yandex.Metrika counter -->
              <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(50268295, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              </script>
              <noscript><div><img src="https://mc.yandex.ru/watch/50268295" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
              <!-- /Yandex.Metrika counter -->
            `
          }} />
        </body>
      </Html>
    );
  }
}
