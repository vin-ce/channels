import React, { useState } from "react"

import "../styles/styles.styl"
import classes from "../styles/index.module.styl"
import Intro from '../components/intro'
import ArticleTemplate from '../components/articleTemplate'
import { articleData } from "../data/articleData"
import { graphql } from 'gatsby'

export default function Home ({ data }) {

  const [ headingPosition, setHeadingPosition ] = useState('landing')

  // fetch public image sources
  let imageSources = []
  data.allFile.edges.forEach(node => {
    imageSources.push(node.node.publicURL)
  })


  let articleEl = []

  articleData.forEach((headingData, headingIndex) => {


    articleEl.push(
      <hr
        key={ `${headingIndex}-break` }
        className={ classes.headingBreak }
      />,
      <ArticleTemplate
        key={ `${headingIndex}-heading` }
        headingIndex={ headingIndex + 1 }
        imageSources={ imageSources }
      />
    )

    console.log("SECITON ", headingData.sectionCount)

    for (let sectionIndex = 0; sectionIndex < headingData.sectionCount; sectionIndex++) {
      articleEl.push(
        <hr
          key={ `${headingIndex}-${sectionIndex}-break` }
          className={ classes.sectionBreak }
        />,
        <ArticleTemplate
          key={ `${headingIndex}-${sectionIndex}-template` }
          headingIndex={ headingIndex + 1 }
          sectionIndex={ sectionIndex + 1 }
          imageSources={ imageSources }
        />
      )

    }

  })


  return (
    <div>
      <title>Nothing to Be Done</title>

      <Intro />

      { articleEl }

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