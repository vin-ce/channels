import React, { useState, useEffect, useRef } from "react"

import "../styles/styles.styl"
import classes from "../styles/index.module.styl"
import Intro from '../components/intro'
import ArticleTemplate from '../components/articleTemplate'
import PositionTracker from '../components/positionTracker'
import { articleData } from "../data/data"
import { graphql } from 'gatsby'
import SidePanel from '../components/sidePanel'

export default function Home ({ data }) {

  const [ isInit, setIsInit ] = useState(true)
  const [ headingPosition, setHeadingPosition ] = useState('landing')

  const [ isSidePanel, setIsSidePanel ] = useState(true)

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

      console.log("SECITON ", headingData.sectionCount)

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

  return (
    <div ref={ containerRef } className={ classes.container }>
      <div ref={ articleRef } className={ classes.article }>
        <title>Nothing to Be Done</title>

        <PositionTracker indexArr={ indexArr.current } setHeadingPosition={ setHeadingPosition } />

        <Intro />

        { isInit ? null : articleEl.current }
      </div>
      <SidePanel
        headingPosition={ headingPosition }
        isSidePanel={ isSidePanel }
        setIsSidePanel={ setIsSidePanel }
        headingPosition={ headingPosition }
        containerRef={ containerRef }
        articleRef={ articleRef }
      />


    </div>
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