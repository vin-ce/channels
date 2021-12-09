import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/sidePanel.module.styl"
import { introData } from './intro'
import { articleData } from "../data/data"
import Links from './sidePanel/links'

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

  const availableInfoSelections = useRef([])
  const sectionData = useRef(null)

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


  console.log("selected info", selectedInfo, infoEl)

  // ---------------
  // SETTING CONTENT

  function selectInfo (info) {

    // push buttons
    // change info

    switch (info) {

      case 'info': {

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

        }

        break
      }

      case 'footnotes': {

        let footnotesEl = []
        sectionData.current.footnotes.forEach(footnote => {
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
            sectionData={ sectionData.current }
            imageSources={ imageSources }
            panelNavRef={ panelNavRef }
          />
        )

        break
      }
      case 'special': {
        setInfoEl(
          <div className={ classes.infoContainer }>
            special
          </div>
        )
        break
      }
      case 'comments': {
        setInfoEl(
          <div className={ classes.infoContainer }>
            <textarea
              className={ classes.textarea }
              placeholder="Comments."
              rows='2'
            />
            <span className={ classes.button }>
              <span className="material-icons-sharp">
                send
              </span>
              Post
            </span>
          </div>
        )
        break
      }
      case 'summary': {

        setInfoEl(
          <div className={ classes.infoContainer }>
            <p>{ sectionData.current.summary }</p>
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
    availableInfoSelections.current.forEach(button => {

      let iconID
      switch (button) {
        case 'info': {
          iconID = 'info'
          break
        }
        case 'links': {
          iconID = 'insert_link'
          break
        }
        case 'footnotes': {
          iconID = 'extension'
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
        case 'summary': {
          iconID = 'compress'
          break
        }
        default: {
          console.log("something went wrong in selecting button: ", button)
        }
      }

      const navButtonClasses = [ 'material-icons-sharp' ]

      if (button === info) {
        navButtonClasses.push(classes.selected)
      } else {
        navButtonClasses.push(classes.deselected)
      }

      tempNavButtons.push(
        <span
          key={ `button-${iconID}` }
          className={ navButtonClasses.join(' ') }
          onClick={ () => {
            setSelectedInfo(button)
          } }
        >
          { iconID }
        </span>
      )

    })

    setNavButtons(tempNavButtons)

    // return 

  }

  // sets up info and buttons
  useEffect(() => {
    // console.log('heading pos change', headingPosition)

    console.log("heading pos", headingPosition)

    if (headingPosition !== 'landing' && headingPosition !== 'how') {

      const indicies = headingPosition.split('-')
      let headingIndex = indicies[ 0 ]
      let sectionIndex = indicies[ 1 ]

      sectionData.current = articleData[ headingIndex - 1 ][ sectionIndex ]

    } else {
      sectionData.current = {
        info: true,
      }
    }


    availableInfoSelections.current = []

    if (sectionData.current) {



      if (sectionData.current.info) {
        availableInfoSelections.current.push('info')
      }

      if (sectionData.current.footnotes) {
        availableInfoSelections.current.push('footnotes')
      }

      if (sectionData.current.links) {
        availableInfoSelections.current.push('links')
      }

      if (sectionData.current.special) {
        availableInfoSelections.current.push('special')
      }


      if (headingPosition !== 'landing' && headingPosition !== 'how') {
        availableInfoSelections.current.push('comments')
        availableInfoSelections.current.push('summary')
      }


      if (availableInfoSelections.current.includes(selectedInfo)) {
        selectInfo(selectedInfo)
      } else {
        selectInfo(availableInfoSelections.current[ 0 ])
      }
    }



  }, [ headingPosition ])


  // happens when you click a nav button
  useEffect(() => {

    if (selectedInfo) {
      console.log('selected info', selectedInfo)
      selectInfo(selectedInfo)
    }
  }, [ selectedInfo ])



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