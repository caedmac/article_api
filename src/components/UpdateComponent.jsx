import React, { useState, useEffect } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

export default function UpdateComponent() {
  const [author, setAuthorName] = useState('');
  const [title, setTitle] = useState('');
  const [opinion, setOpinion] = useState('');
  const [id, setID] = useState(null);

  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setAuthorName(localStorage.getItem('Author'));
    setTitle(localStorage.getItem('Title'));
    setOpinion(localStorage.getItem('Opinion'));
  }, []);

  const handleAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOpinion = (event) => {
    setOpinion(event.target.value);
  };

  const putData = () => {
    axios
      .put(`https://63784ab95c477765122e9d3c.mockapi.io/articles/${id}`, {
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
          <input
            placeholder="Author Name"
            value={author}
            onChange={handleAuthorName}
          />
        </Form.Field>
        <Form.Field required>
          <label>Title</label>
          <input placeholder="Title" value={title} onChange={handleTitle} />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal"></Form.Group>
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Opinion"
        placeholder="Opinion"
        value={opinion}
        required
        onChange={handleOpinion}
      />
      <Button type="submit" onClick={putData}>
        Update
      </Button>
    </Form>
  );
}

UpdateComponent.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
}