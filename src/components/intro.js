

import React from "react"

import classes from "../styles/intro.module.styl"

import { StaticImage } from 'gatsby-plugin-image'


// contains 'landing' + 'how to navigate this book'


export const introData = {
  metadata: (
    <div className={ classes.landingContainer }>
      <h2>Metadata</h2>
      <p style={ { marginBottom: '0' } }>January 10, 2017 <span className={ classes.mutedColor }>— Last Updated</span></p>
      <p style={ { marginTop: '0' } }>~16 minutes <span className={ classes.mutedColor }>— Time to Read</span></p>
    </div>
  )
  ,
  how: (

    <div className={ classes.landingContainer }>
      <h2>How??</h2>
    </div>

  )
}

export default function Intro () {
  return (
    <div className={ classes.intro }>


      <div id="landing" className={ `${classes.module} ${classes.landing}` }>
        <div className={ classes.index }></div>
        <div className={ classes.content }>
          <h1>Nothing to Be Done</h1>
          <h3>Joe Edelman</h3>
          <StaticImage
            src="../images/0 - cover.png"
            alt="nothing to be done, this is fine comic"
            className={ classes.coverImage }
          />
          <p className={ classes.blurb }>An essay that analyses our institutions as shaped by different views of human nature, each of which is incomplete on its own. The reason we’re stuck right now is because of the lack of a new vision of human nature.</p>
        </div>
      </div>

      <hr />

      <div id="how" className={ classes.module }>
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
