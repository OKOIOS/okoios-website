import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body className="min-w-1366 bg-okgray m-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument