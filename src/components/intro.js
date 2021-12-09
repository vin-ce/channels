

import React from "react"

import classes from "../styles/intro.module.styl"

import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'react-scroll'

// contains 'landing' + 'how to navigate this book'

export const introData = {
  metadata: (
    <div className={ classes.panel }>
      <h2>Metadata</h2>
      <p style={ { marginBottom: '0' } }>January 10, 2017 <span className={ classes.mutedColor }>— Last Updated</span></p>
      <p style={ { marginTop: '0' } }>~16 minutes <span className={ classes.mutedColor }>— Time to Read</span></p>
    </div>
  ),
  how: (

    <div className={ `${classes.panel}` }>
      <h2>The Side Panel</h2>
      <p>This where additional information go. There are several modules that you might see, buttons for which are at the top.</p>
      <p>
        <span className={ `material-icons-sharp ${classes.icon}` }> insert_link</span> The links module display links that relate ideas from other parts of the book into the current section. There will be a box that gives a short descriptor as to why the linked section is relevant, and the bottom half of the panel will be the text itself that you can also scroll to, to see it in context.
      </p>
      <p>
        <span className={ `material-icons-sharp ${classes.icon}` }> extension</span> The extension module captures additional information. In this essay, the footnotes lie here.
      </p>
      <p>
        <span className={ `material-icons-sharp ${classes.icon}` }> star</span> The special module are small interactive parts that add more flavour to the text's content.
      </p>
      <p>
        <span className={ `material-icons-sharp ${classes.icon}` }> chat_bubble</span> Comments related to the particular section.
      </p>
      <p>
        <span className={ `material-icons-sharp ${classes.icon}` }> compress</span> The summary for the section. This way you can view original full text alongside the summary.
      </p>
    </div>

  )
}

export default function Intro ({ isSummary, setIsSummary, isSidePanel, setIsSidePanel, setSizings }) {
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

      <div id="how">

        <div className={ classes.module }>
          <div className={ classes.index }>0</div>
          <div className={ classes.content }>
            <h2>How to Navigate This Book</h2>
          </div>
        </div>

        <hr className={ classes.smallBreak } />

        <div className={ classes.module }>
          <div className={ classes.index }>0-1</div>
          <div className={ classes.content }>
            <p> This book has many additional parts to it than just the text itself.</p>
            <p> The left column contains the index. This section has the index 0-1, meaning heading 0, part 1. Each section conveys one idea.</p>
            <p>

              At the top is the navigation bar.

              {/* &nbsp; */ }

              <Link
                to={ 'landing' }
                smooth
              >
                <span className={ `material-icons-sharp ${classes.button}` }>
                  arrow_upward
                </span>
              </Link > returns you to the top.

              Each section individual section has a summary of its idea. You can view this article in this condensed, 'summarised' way through clicking this button:

              <span
                className={ `material-icons-sharp ${classes.button} ${isSummary ? classes.selected : classes.unselected}` }
                onClick={ () => setIsSummary(true) }
              >
                compress
              </span>.

              To change it back to the original text, click this:

              <span
                className={ `material-icons-sharp ${classes.button} ${!isSummary ? classes.selected : classes.unselected}` }
                onClick={ () => setIsSummary(false) }
              >
                expand
              </span>.
            </p>
            <p>
              The right panel contains additional layers of information. Open / close it through this arrow:

              {
                isSidePanel
                  ?
                  <span
                    className={ `material-icons-sharp ${classes.button} ${classes.sideOpen}` }
                    onClick={ () => {
                      setIsSidePanel(false)
                      setSizings(0)
                    } }
                  >
                    arrow_forward_ios
                  </span>
                  :
                  <span
                    className={ `material-icons-sharp ${classes.button} ${classes.sideOpen}` }
                    onClick={ () => {
                      setIsSidePanel(true)
                      setSizings(480)
                    } }
                  >
                    arrow_back_ios
                  </span>

              }

            </p>
          </div>
        </div>
      </div>

    </div >
  )
}
