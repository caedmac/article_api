import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ReadComponent() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63784ab95c477765122e9d3c.mockapi.io/articles`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, author, title, opinion } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Author', author);
    localStorage.setItem('Title', title);
    localStorage.setItem('Opinion', opinion);
  };

  const getData = () => {
    axios
      .get(`https://63784ab95c477765122e9d3c.mockapi.io/articles`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63784ab95c477765122e9d3c.mockapi.io/articles/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <Table celled fixed singleLine unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Opinion</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.title}</Table.Cell>
              <Table.Cell>{data.author}</Table.Cell>
              <Table.Cell
                title={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                  'et dolore magna aliqua.',
                ].join(' ')}
              >
                {data.opinion}
              </Table.Cell>

              <Table.Cell>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>

              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}