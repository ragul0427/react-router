import React from 'react'
import { Link } from 'react-router-dom'

export default function pagenotfound()
 {
  return (
    <div>
        <h1>Page Not Found</h1>
        <p>Go to </p>
        <Link to='/'>
            Home page
        </Link>
    </div>
  )
}
