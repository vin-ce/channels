import React from "react"
import { Link } from 'react-scroll'
import classes from "../styles/index.module.styl"

export default function PositionTracker ({ indexArr, setHeadingPosition }) {

  let linksElArr = []
  let offset = -200

  const onSetActive = (el) => {
    setHeadingPosition(el)
  }

  indexArr.forEach(index => {
    linksElArr.push(
      <Link
        key={ `${index}-link` }
        to={ index }
        spy={ true }
        offset={ offset }
        smooth
        activeClass={ classes.active }
        onSetActive={ onSetActive }
      // style={ { display: "block" } }
      >
        {/* { index } */ }
      </Link >
    )
  })

  return (
    <div style={
      {
        // position: 'fixed',
        // zIndex: 100,
        // top: '6 rem',
        // display: 'flex',
        // flexDirection: 'column',
      }
    }>
      <Link
        to="landing"
        spy={ true }
        offset={ offset }
        smooth
        onSetActive={ onSetActive }
      >
        {/* hello */ }
      </Link>
      <Link
        to="how"
        spy={ true }
        offset={ offset }
        smooth
        onSetActive={ onSetActive }
      >
      </Link>
      { linksElArr }
    </div>
  )
}
