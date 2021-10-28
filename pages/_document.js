import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-okgray">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument