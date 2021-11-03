import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body id="top" className="bg-okgray min-h-screen relative font-body font-light text-oklavishwhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument