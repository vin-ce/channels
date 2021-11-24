import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/sidePanel.module.styl"
import { introData } from './intro'
import { articleData } from "../data/data"

export default function SidePanel ({ headingPosition, isSidePanel, articleRef, containerRef }) {


  console.log('heading pos', headingPosition)


  // --------
  // RESIZING

  // https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup

  const [ isResizing, setIsResizing ] = useState(false)

  const panelRef = useRef(null)


  document.onmousemove = (e) => {
    if (!isResizing) return

    const offsetRight = containerRef.current.clientWidth - (e.clientX - containerRef.current.offsetLeft);

    articleRef.current.style.width = 'unset'
    articleRef.current.style.right = offsetRight + "px";
    panelRef.current.style.width = offsetRight + "px";

  }

  // stop resizing
  document.onmouseup = function () {
    setIsResizing(false);
  }


  // ---------------
  // SETTING CONTENT

  let contentEL

  if (headingPosition === 'landing') {

    contentEL = (
      <div className={ classes.contentContainer }>
        { introData.landing }
      </div>
    )

  } else if (headingPosition === 'how') {
    contentEL = (
      <div className={ classes.contentContainer }>
        { introData.how }
      </div>
    )

  } else {

  }



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

      { contentEL }
    </div>
  )
}