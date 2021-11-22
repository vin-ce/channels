import React from "react"

import "../styles/styles.styl"
// import classes from "../styles/index.module.styl"
import Intro from '../components/intro'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <div>
      <Helmet>
        <title>Nothing to Be Done</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>

      <Intro />

    </div>
  )
}
