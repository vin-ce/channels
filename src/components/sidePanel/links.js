import React, { useState } from "react"
import classes from "../../styles/links.module.styl"
import { articleData } from "../../data/data"
import { createArticleEl } from '../articleTemplate'


export default function Links ({ sectionData, imageSources }) {

  const [ curLinkedIndex, setCurLinkedIndex ] = useState(0)

  const linksArr = sectionData.links

  // console.log('section data', sectionData)


  let additionalLinksEl
  let linkedSectionText

  if (linksArr.length > 1) {
    additionalLinksEl = (
      <div className={ classes.module }>
        <div className={ classes.label }>Linked Index</div>
        <div>
          { curLinkedIndex + 1 } / linksArr.length
        </div>
      </div>
    )


  }

  const indicies = sectionData.links[ curLinkedIndex ].index.split('-')
  let headingIndex = indicies[ 0 ]
  let sectionIndex = indicies[ 1 ]
  console.log("HEADING SECTION INDEX", indicies)

  const { bodyEl } = createArticleEl(headingIndex, sectionIndex, imageSources)

  linkedSectionText = (
    <div>
      { bodyEl }
    </div>
  )


  return (
    <div className={ classes.wrapper }>

      <div className={ classes.headingInfoContainer }>
        <div className={ `${classes.module} ${classes.leftModule}` }>
          <div className={ `${classes.label} ${classes.linkedIndex}` }>Linked Index</div>
          <div>{ linksArr[ curLinkedIndex ].index }</div>
        </div>
        { additionalLinksEl }
        <div className={ `${classes.module} ${classes.rightModule}` } >
          <div className={ classes.label }>Why It's Relevant</div>
          <p>{ linksArr[ curLinkedIndex ].relevance }</p>
        </div>
      </div>

      <div className={ `${classes.module} ${classes.bottomModule}` }>
        <div className={ classes.bottomTextBar }>
          <span className={ classes.label }> { linksArr[ curLinkedIndex ].index } | Text</span>
        </div>
        { linkedSectionText }
      </div>
    </div>
  )

}