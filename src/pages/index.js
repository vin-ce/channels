import React, { useState, useEffect, useRef } from "react"

import "../styles/styles.styl"
import classes from "../styles/index.module.styl"

import Intro from '../components/intro'
import ArticleTemplate from '../components/articleTemplate'
import PositionTracker from '../components/positionTracker'
import SidePanel from '../components/sidePanel'

import { articleData } from "../data/data"
import { graphql } from 'gatsby'
import { Link } from 'react-scroll'

export default function Home ({ data }) {

  const [ isInit, setIsInit ] = useState(true)
  const [ headingPosition, setHeadingPosition ] = useState('landing')

  const [ isSidePanel, setIsSidePanel ] = useState(false)
  const [ navEl, setNavEl ] = useState(null)

  // useRef so values don't reset on state change
  // fetch public image sources
  const imageSources = useRef([])

  const articleEl = useRef([])
  const indexArr = useRef([])

  useEffect(() => {
    data.allFile.edges.forEach(node => {
      imageSources.current.push(node.node.publicURL)
    })

    articleData.forEach((headingData, headingIndex) => {

      articleEl.current.push(
        <hr
          key={ `${headingIndex}-break` }
          className={ classes.headingBreak }
        />,
        <ArticleTemplate
          key={ `${headingIndex}-heading` }
          headingIndex={ headingIndex + 1 }
          imageSources={ imageSources.current }
        />
      )

      indexArr.current.push(`${headingIndex + 1}`)

      for (let sectionIndex = 0; sectionIndex < headingData.sectionCount; sectionIndex++) {
        articleEl.current.push(
          <hr
            key={ `${headingIndex}-${sectionIndex}-break` }
            className={ classes.sectionBreak }
          />,
          <ArticleTemplate
            key={ `${headingIndex}-${sectionIndex}-template` }
            headingIndex={ headingIndex + 1 }
            sectionIndex={ sectionIndex + 1 }
            imageSources={ imageSources.current }
          />
        )

        indexArr.current.push(`${headingIndex + 1}-${sectionIndex + 1}`)
      }

    })

    setIsInit(false)

  }, [])

  const containerRef = useRef(null)
  const articleRef = useRef(null)

  let navRef = useRef(null)

  function setSizings (rightMargin, e, panelRef, panelNavRef) {
    let offsetRight

    if (e) {
      offsetRight = containerRef.current.clientWidth - (e.clientX - containerRef.current.offsetLeft);
    } else {
      offsetRight = rightMargin
    }

    articleRef.current.style.width = 'unset'
    articleRef.current.style.right = offsetRight + "px";

    if (panelRef) {
      panelRef.current.style.width = offsetRight + "px";
      panelNavRef.current.style.width = offsetRight + "px";

    }

    if (navRef.current) {
      navRef.current.style.width = 'unset'
      navRef.current.style.right = offsetRight + "px";
    }
  }

  let navClasses = [ classes.nav ]
  if (headingPosition === 'landing') {
    navClasses.push(classes.hidden)
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>

      <div ref={ containerRef } className={ classes.container }>

        <div ref={ navRef } className={ navClasses.join(' ') }>

          <Link
            to={ 'landing' }
            smooth
          >
            <span className="material-icons-sharp">
              arrow_upward
            </span>
          </Link >


          <span className={ `material-icons-sharp ${classes.compress} ${classes.unselected}` }>
            compress
          </span>

          <span className={ `material-icons-sharp ${classes.selected}` }>
            expand
          </span>

          {
            isSidePanel
              ?
              <span
                className={ `material-icons-sharp ${classes.sideOpen}` }
                onClick={ () => {
                  setIsSidePanel(false)
                  setSizings(0)
                } }
              >
                arrow_forward_ios
              </span>
              :
              <span
                className={ `material-icons-sharp ${classes.sideOpen}` }
                onClick={ () => {
                  setIsSidePanel(true)
                  setSizings(480)
                } }
              >
                arrow_back_ios
              </span>


          }


        </div>

        <PositionTracker indexArr={ indexArr.current } setHeadingPosition={ setHeadingPosition } />

        <div ref={ articleRef } className={ classes.article }>
          <title>Nothing to Be Done</title>


          <Intro />

          { isInit ? null : articleEl.current }
        </div>

        { isSidePanel
          ?
          <SidePanel
            headingPosition={ headingPosition }
            isSidePanel={ isSidePanel }
            setIsSidePanel={ setIsSidePanel }
            containerRef={ containerRef }
            articleRef={ articleRef }
            navRef={ navRef }
            setSizings={ setSizings }
            imageSources={ imageSources.current }
          /> :
          null
        }


      </div>
    </>

  )
}

export const imageQuery = graphql`
  {
    allFile {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`