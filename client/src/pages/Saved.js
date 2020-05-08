import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";

function Books() {
  // Setting our component's initial state
  // const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <br />
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
          <br />
          {/* <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form> */}
        </Col>
        {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
      </Row>
      <Row>
        <Col size="md-12">
          <div className="bg-light py-3 px-2">
            Saved Books
            <div className="bg-light p-2 m-3">
              <Card
                key={1}
                id={1}
                title={"Harry Otter"}
                authors={["Wanda", "Carlos de Maye", "JK Simmons"]}
                description={
                  "bgojegoago gsa goas gosad g sgojs dgojsad gojsad gojsad gasojdg saoj ajsh safh asfmh osa hasod hsajod gjow gwra gow gojwe bojw egojE Geog awj gwae go sajaw g weagop asfg arg aospbosa gs gja dgojas g sagoja esgo aweg aeog aosjd gasdmg ms oasf hfoh sdfh dflmh dsfh. bgojegoago gsa goas gosad g sgojs dgojsad gojsad gojsad gasojdg saoj ajsh safh asfmh osa hasod hsajod gjow gwra gow gojwe bojw egojE Geog awj gwae go sajaw g weagop asfg arg aospbosa gs gja dgojas g sagoja esgo aweg aeog aosjd gasdmg ms oasf hfoh sdfh dflmh dsfh. "
                }
                image={
                  "https://res.cloudinary.com/teepublic/image/private/s--cvmd4huL--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-100,y_-76/co_rgb:000000,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-100,y_-76/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_jpg,h_630,q_90,w_630/v1565176095/production/designs/5537704_0.jpg"
                }
                link={"https://google.com"}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
