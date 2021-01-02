import React from 'react'
import ReactDOM from 'react-dom'

function Uploader() {
  return(
    <div>
      Uploader
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Uploader />,
    document.body.appendChild(document.createElement('div')),
  )
})
