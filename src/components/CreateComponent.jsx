import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function CreateComponent() {
  const [author, setAuthorName] = useState('');
  const [title, setTitle] = useState('');
  const [opinion, setOpinion] = useState('');

  let history = useNavigate();

  const handleAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOpinion = (event) => {
    setOpinion(event.target.value);
  };

  const postData = () => {
    axios
      .post(`https://63784ab95c477765122e9d3c.mockapi.io/articles`, {
        author,
        title,
        opinion,
      })
      .then(() => {
        history('/read');
      });
  };

  return (
    <Form className="create-form">
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Author Name</label>
          <input placeholder="Author Name" onChange={handleAuthorName} />
        </Form.Field>
        <Form.Field required>
          <label>Title</label>
          <input placeholder="Title" onChange={handleTitle} />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Opinion"
          placeholder="Opinion"
          onChange={handleOpinion}
          required
        />
      </Form.Group>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}
