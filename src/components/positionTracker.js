import React from "react"
import { Link } from 'react-scroll'

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
        activeClass={ 'active' }
        onSetActive={ onSetActive }
      // style={ { display: "block" } }
      >
      </Link >
    )
  })

  return (
    <div>
      <Link
        to="landing"
        spy={ true }
        offset={ offset }
        smooth
        onSetActive={ onSetActive }
      >
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
