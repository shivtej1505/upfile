import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'semantic-ui-react'

function Uploader() {
  return(
    <div>
      Uploader
      <Button>Click Here</Button>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Uploader />,
    document.body.appendChild(document.createElement('div')),
  )
})
