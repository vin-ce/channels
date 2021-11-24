import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/sidePanel.module.styl"
import { introData } from './intro'
import { articleData } from "../data/data"

export default function SidePanel ({ headingPosition, isSidePanel, articleRef, containerRef, navRef, setSizings }) {


  console.log('heading pos', headingPosition)


  // --------
  // RESIZING

  // https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup

  const [ isResizing, setIsResizing ] = useState(false)
  const [ selectedInfo, setSelectedInfo ] = useState(null)

  const panelRef = useRef(null)
  const panelNavRef = useRef(null)



  document.onmousemove = (e) => {
    if (!isResizing) return

    // document.style.userSelect = 'none'
    document.querySelector('body').style.userSelect = 'none'

    setSizings(null, e, panelRef, panelNavRef)

  }

  // stop resizing
  document.onmouseup = function () {
    setIsResizing(false);
    document.querySelector('body').style.userSelect = 'unset'
  }


  // ---------------
  // SETTING CONTENT

  let contentEl
  let navButtons = []

  if (headingPosition === 'landing') {

    contentEl = (
      <div className={ classes.introContainer }>
        { introData.metadata }
      </div>
    )

  } else if (headingPosition === 'how') {
    contentEl = (
      <div className={ classes.introContainer }>
        { introData.how }
      </div>
    )

  } else {

    const indicies = headingPosition.split('-')
    let headingIndex = indicies[ 0 ]
    let sectionIndex = indicies[ 1 ]

    let sectionData = articleData[ headingIndex - 1 ][ sectionIndex ]

    console.log('section data', headingPosition, sectionData)


    if (sectionData) {

      // ensures that there is a button selected
      let defaultInfo
      let selectedInfoEl

      // if (sectionData.footnotes) {
      //   defaultInfo = 'footnotes'

      //   navButtons.push(
      //     <span key="button-footnote" className={ `material-icons ${classes.navButton}` }>
      //       add
      //     </span>
      //   )
      // }

      // lots of rejiggling necessary -- set selected info's default if the prev one is not available, set it as prev if available

      // maybe a switch situation to handle each type? e.g links vs footnotes vs special vs comments

      // if (sectionData[ selectedInfo ]) {

      //   // figure out how to structure

      //   contentEl = (
      //     <div className={ classes.contentContainer }>
      //       { sectionData[ selectedInfo ] }
      //     </div>
      //   )
      // } else {
      //   contentEl = (
      //     <div className={ classes.contentContainer }>
      //       { sectionData[ defaultInfo ] }
      //     </div>
      //   )

      //   setSelectedInfo(defaultInfo)
      // }


    }




  }

  // let navButtons = []




  contentEl = (
    <div className={ classes.wrapper }>
      <div ref={ panelNavRef } className={ classes.nav }>
        <span>
          <strong>{ headingPosition }</strong> <span className={ classes.mutedColor }> | section</span>
        </span>
        <span className={ classes.navButtons }>
          { navButtons }

        </span>
      </div>
      { contentEl }
    </div>
  )



  // -------
  // CLASSES

  let sidePanelClasses = [ classes.panelContainer ]
  if (!isSidePanel) sidePanelClasses.push(classes.inactive)

  return (
    <div ref={ panelRef } className={ sidePanelClasses.join(' ') }>
      <hr

        className={ classes.handle }
        onMouseDown={ () => setIsResizing(true) }

      />

      { contentEl }
    </div>
  )
}