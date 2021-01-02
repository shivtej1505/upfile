import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Container, Header } from 'semantic-ui-react'

function Uploader() {
  return(
    <Container textAlign='center'>
      <Header as='h1'>Upfile</Header>
      <Button size='large' onClick={() => console.log("file uploading")} primary>Upload</Button>
    </Container>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Uploader />,
    document.body.appendChild(document.createElement('div')),
  )
})
