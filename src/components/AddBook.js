import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddBook extends Component {

  render() {
    return (
      <div className='form-wrapper'>
        <Form>
          <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="Genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="Isbn">
          <Form.Label>Isbn</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="info" size="mg" block="block" type="submit">
          Add Book
        </Button>
       </Form>
      </div>
    );
  }
}

export default AddBook;