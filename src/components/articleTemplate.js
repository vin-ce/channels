import React from "react"
import { articleData } from "../data/data"
import classes from "../styles/articleTemplate.module.styl"
import { StaticImage } from 'gatsby-plugin-image'

export default function ArticleTemplate ({ headingIndex, sectionIndex, imageSources }) {

  let indexEl
  let bodyEl
  let id

  if (sectionIndex) {

    indexEl = (
      <div className={ classes.index }>{ headingIndex }-{ sectionIndex }</div>
    )

    let contentEl = []
    articleData[ headingIndex - 1 ][ sectionIndex ].content.forEach((content, index) => {

      if (content.text) {

        // TO DO -> if has footnote, add footnote thing to end

        if (content.footnote) {
          contentEl.push(
            <p
              key={ `${headingIndex}-${sectionIndex}-${index}` }
            >
              { content.text }<sup>{ content.footnote }</sup>
            </p>
          )

          // finish module
          return
        }

        contentEl.push(
          <p
            key={ `${headingIndex}-${sectionIndex}-${index}` }
          >
            { content.text }
          </p>
        )


      } else if (content.emphasis) {
        contentEl.push(
          <blockquote
            key={ `${headingIndex}-${sectionIndex}-${index}` }
          >
            { content.emphasis }
          </blockquote>
        )

      } else if (content.image) {
        // https://stackoverflow.com/questions/44440317/check-if-an-array-of-strings-contains-a-substring

        // find public URL for particular image
        const regex = new RegExp(content.image)
        let url = imageSources.find(src => regex.test(src))

        contentEl.push(
          <img
            key={ `${headingIndex}-${sectionIndex}-${index}` }
            src={ url }
          />
        )

        if (content.caption) {
          contentEl.push(
            <figcaption
              key={ `${headingIndex}- ${sectionIndex} - ${index} - caption` }
            >
              { content.caption }</figcaption>
          )
        }

      }

    })

    bodyEl = (
      <div className={ classes.content }>
        { contentEl }
      </div>
    )

    id = `${headingIndex}-${sectionIndex}`

  } else {
    // only has heading
    indexEl = (
      <div className={ classes.index }>{ headingIndex }</div>
    )

    bodyEl = (
      <div className={ classes.content }>
        <h2>{ articleData[ headingIndex - 1 ].heading }</h2>
      </div>
    )

    id = headingIndex

  }


  return (
    <div id={ id } className={ classes.module }>
      { indexEl }
      { bodyEl }
    </div>
  )
}
