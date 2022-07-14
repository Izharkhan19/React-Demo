import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { News } from "./News";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsHandler } from "../state";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const { handleSearchValue } = bindActionCreators(actionsHandler, dispatch);

  let handleChange = () => {
    let searchValue = document.getElementById("searchValue").value;
    // console.log(searchValue);
    handleSearchValue(searchValue);
  };

  return (
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <h3> <b>  Articles & News | </b> India's Best atricles's collection site.   </h3> 
          {" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          SEARCH ARTICLE : {" "}
          <Form className="d-flex">
            <Form.Control
              type="search"
              id="searchValue"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
