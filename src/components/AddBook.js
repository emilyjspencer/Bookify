import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddBook extends Component {

  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeIsbn = this.onChangeIsbn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: '',
      genre: '',
      isbn: ''
    }
  };

  onChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeAuthor(e) {
    this.setState({author: e.target.value})
  }

  onChangeGenre(e) {
    this.setState({genre: e.target.value})
  }

  onChangeIsbn(e) {
    this.setState({isbn: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Book created`)
    console.log(`Title: ${this.state.title}`);
    console.log(`Author: ${this.state.author}`);
    console.log(`Genre: ${this.state.genre}`);
    console.log(`Isbn: ${this.state.isbn}`);

    this.setState({title: '', author: '', genre: '', isbn: ''})
  }

  render() {
    return (
      <div className='form-wrapper'>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.title}  onChange={this.onChangeTitle} />
          </Form.Group>
        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthor} />
        </Form.Group>
        <Form.Group controlId="Genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" value={this.state.genre} onChange={this.onChangeGenre} />
        </Form.Group>
        <Form.Group controlId="Isbn">
          <Form.Label>Isbn</Form.Label>
          <Form.Control type="text" value={this.state.isbn} onChange={this.onChangeIsbn} />
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