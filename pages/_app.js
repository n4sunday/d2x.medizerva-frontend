import App, { Container } from "next/app"
import React from "react"
import Head from 'next/head'

import withReduxStore from "../redux/lib/with-redux-store"
import { Provider } from "react-redux"

import "../assets/styles.scss"
import Styles from "../assets/styles"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    console.log(reduxStore)
    return (
      <div className="my-app">
        <Head>
          <title>Next.js</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet"></link>
          <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Container>

          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
          <Styles />
        </Container>
      </div>
    )
  }
}

export default withReduxStore(MyApp)
