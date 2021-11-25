import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/sidePanel.module.styl"
import { introData } from './intro'
import { articleData } from "../data/data"
import Links from './sidePanel/links'

import { Link } from 'react-scroll'
import Comments from './sidePanel/comments'

export default function SidePanel ({ headingPosition, isSidePanel, setSizings, imageSources }) {


  // console.log('heading pos', headingPosition)


  // --------
  // RESIZING

  // https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup

  const [ isResizing, setIsResizing ] = useState(false)

  const [ navButtons, setNavButtons ] = useState(null)
  const [ selectedInfo, setSelectedInfo ] = useState(null)
  const [ infoEl, setInfoEl ] = useState(null)

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

  function selectInfo (info, availableInfoSelections, sectionData) {

    // push buttons
    // change info

    switch (info) {
      case 'footnotes': {

        let footnotesEl = []
        sectionData.footnotes.forEach(footnote => {
          let key = Object.keys(footnote)
          footnotesEl.push(
            <p key={ `footnote-${key[ 0 ]}` }>
              <span className={ classes.footnoteNum }>{ key[ 0 ] }</span>. { footnote[ key[ 0 ] ] }</p>
          )
        })

        setInfoEl(
          <div className={ classes.infoContainer }>
            <h2>Footnotes</h2>
            { footnotesEl }
          </div>
        )

        break
      }
      case 'links': {

        setInfoEl(
          <Links
            sectionData={ sectionData }
            imageSources={ imageSources }
          />
        )

        break
      }
      case 'special': {
        break
      }
      case 'comments': {
        setInfoEl(
          <div className={ classes.infoContainer }>
            comments :)
          </div>
        )
        break
      }
      default: {
        console.log("something went wrong in selecting info: ", info)
      }

    }


    // sets buttons
    let tempNavButtons = []
    availableInfoSelections.forEach(button => {

      let iconID
      switch (button) {
        case 'footnotes': {
          iconID = 'extension'
          break
        }
        case 'links': {
          iconID = 'insert_link'
          break
        }
        case 'special': {
          iconID = 'star'
          break
        }
        case 'comments': {
          iconID = 'chat_bubble'
          break
        }
        default: {
          console.log("something went wrong in selecting button: ", button)
        }
      }

      if (button === info) {
        tempNavButtons.push(
          <span key={ `button-${iconID}` } className={ `material-icons-sharp ${classes.selected}` }>
            { iconID }
          </span>
        )

      } else {
        tempNavButtons.push(
          <span key={ `button-${iconID}` } className={ `material-icons-sharp ${classes.navButton}` }>
            { iconID }
          </span>
        )
      }

    })

    setNavButtons(tempNavButtons)

    // return 

  }

  // sets content and buttons
  useEffect(() => {
    // console.log('heading pos change', headingPosition)

    if (headingPosition === 'landing') {

      setInfoEl(
        <div className={ classes.introContainer }>
          { introData.metadata }
        </div>
      )

    } else if (headingPosition === 'how') {
      setInfoEl(
        <div className={ classes.introContainer }>
          { introData.how }
        </div>
      )

    } else {

      const indicies = headingPosition.split('-')
      let headingIndex = indicies[ 0 ]
      let sectionIndex = indicies[ 1 ]

      let sectionData = articleData[ headingIndex - 1 ][ sectionIndex ]

      // console.log('section data', headingPosition, sectionData)

      let availableInfoSelections = []

      if (sectionData) {

        if (sectionData.footnotes) {
          availableInfoSelections.push('footnotes')
        }

        if (sectionData.links) {
          availableInfoSelections.push('links')
        }

        if (sectionData.special) {
          availableInfoSelections.push('special')
        }

        availableInfoSelections.push('comments')

        if (availableInfoSelections.includes(selectedInfo)) {
          selectInfo(selectedInfo, availableInfoSelections, sectionData)
        } else {
          selectInfo(availableInfoSelections[ 0 ], availableInfoSelections, sectionData)
        }
      }

    }

  }, [ headingPosition ])






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

      <div className={ classes.wrapper }>

        <div ref={ panelNavRef } className={ classes.nav }>
          <span>
            <strong>{ headingPosition }</strong> <span className={ classes.mutedColor }> | section</span>
          </span>
          <span className={ classes.navButtons }>
            { navButtons }
          </span>
        </div>

        { infoEl }

      </div>
    </div>
  )
}