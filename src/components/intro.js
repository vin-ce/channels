

import React from "react"

import classes from "../styles/intro.module.styl"

import { StaticImage } from 'gatsby-plugin-image'

// contains 'landing' + 'how to navigate this book'

export default function Intro () {
  return (
    <div className={ classes.intro }>

      <div className={ classes.module }>
        <div className={ classes.index }>0-0</div>
        <div className={ classes.content }>
          <StaticImage
            src="../images/0 - cover.png"
            alt="nothing to be done, this is fine comic"
            className={ classes.coverImage }
          />
          <h1>Nothing to Be Done</h1>
          <h3>Joe Edelman</h3>
          <p className={ classes.blurb }>An essay that analyses our institutions as shaped by different views of human nature, each of which is incomplete on its own. The reason we’re stuck right now is because of the lack of a new vision of human nature.</p>
        </div>
      </div>

      <hr />

      <div className={ classes.module }>
        <div className={ classes.index }>0-1</div>
        <div className={ classes.content }>
          <h2>How to Navigate This Book</h2>
          <div>
            Stuff here with buttons etc!
          </div>
        </div>
      </div>


    </div>
  )
}
