import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import { Input } from "../components/Form";
// // When this component mounts, grab the book with the _id of props.match.params.id
// // e.g. localhost:3000/books/599dcb67f0f16317844583fc
// const {id} = useParams()
// useEffect(() => {
//   API.getBook(id)
//     .then(res => setBook(res.data))
//     .catch(err => console.log(err));
// }, [])

class Search extends Component {
  render() {
    function handleInputChange(event) {
      const { name, value } = event.target;
      // setFormObject({...formObject, [name]: value})
    }

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
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="bg-light pt-3 pb-5 px-2">
              Book Search
              <hr/>
              <div>Books</div>
              <form className="mt-2">
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
              </form>
              <button className="btn btn-primary float-right">Save</button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col size="md-12">
            <div className="bg-light py-3 px-2">
              Saved Books
              <div className="bg-light p-2 m-3">
                <SearchCard
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
}

export default Search;
