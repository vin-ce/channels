import React from "react"
import { Link } from 'react-scroll'

export default function Comments () {
  return (
    <div style={ {
      marginTop: '4.8rem'
    } }>
      TEST
      <Link
        to="2-3"
        smooth
      >
        TEST LINK
      </Link>
    </div>
  )
}