

import React from "react"

import classes from "../styles/intro.module.styl"

import { StaticImage } from 'gatsby-plugin-image'


// contains 'landing' + 'how to navigate this book'


export const introData = {
  landing: (
    <div>
      <div>
        <h2>Metadata</h2>
        <p>January 10, 2017 <span className={ classes.deemphasize }>— Last Updated</span></p>
        <p>~16 minutes <span className={ classes.deemphasize }>— Time to Read</span></p>
      </div>
      <div>
        <h2>Colophon</h2>
        <p>
          Type set in:
          <ul>
            <li><span style={ { fontStyle: 'italic' } }>Spectral</span>, designed by Production Type.</li>
            <li><span style={ { fontFamily: 'IBM Plex Sans', fontStyle: 'italic' } }>IBM Plex Sans</span>, designed by Mike Abbink, in collaboration with Bold Monday.</li>
            <li></li>
          </ul>
        </p>
        <p>Summaries, links and website by <a href="http://www.vincentli.space/" target="_blank">Vincent Li</a></p>
      </div>
    </div>
  ),
  how: (
    <div>how???</div>
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
