import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Container, Header, Form } from 'semantic-ui-react'
import upload from './api/upload';

function Uploader() {
  const [file, setFile] = useState({});

  const uploader = () => {
    console.log(file);
    upload(file);
  }

  const fileUi = (file) => {
    if (!!!file) {
      return null;
    }
    return (
      <div>
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
      </div>
    )
  }

  return(
    <Container textAlign='center'>
      <Header as='h1'>Upfile</Header>
      <Form>
        <Form.Field>
          <input type='file' onChange={event => setFile(event.target.files[0])}/>
        </Form.Field>
      </Form>
      <Button size='large' type='submit' primary onClick={() => uploader()}>Upload</Button>
      {fileUi(file)}
    </Container>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Uploader />,
    document.body.appendChild(document.createElement('div')),
  )
})
