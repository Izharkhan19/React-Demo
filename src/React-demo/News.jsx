import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsHandler } from "../state";
import Paginations from "./Paginations";

export const News = () => {
  const dispatch = useDispatch();
  const { handleApiResponce } = bindActionCreators(actionsHandler, dispatch);

  // News data fetched from redux.
  const newsData = useSelector((state) => state.responce);

  // # search box value from navbar component :
  const searchValue = useSelector((state) => state.search);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  let fetchNews = () => {
    debugger;
    if (searchValue) {
      setPosts([]);
    }
    let empUrl = `https://jsonplaceholder.typicode.com/comments?q=${searchValue}&_limit=300`;
    fetch(empUrl)
      .then((response) => response.json())
      .then((responce) => {
        console.log(responce);
        /// Set the responce in Redux
        handleApiResponce(responce);
        setPosts(responce);
        // handleApiResponce(responce.articles);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [searchValue]);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let handleSort = () => {
    debugger;
    setPosts(currentPosts.reverse());
    console.log("Hello", newsData);
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <b> Sorting enable's during searching omly. </b>
        {searchValue === "" ? (
          <>
            <Button disabled={true} className="mx-3">
              Sort Articles
            </Button>
          </>
        ) : (
          <>
            <Button className="mx-3" onClick={handleSort}>
              Sort Articles
            </Button>
          </>
        )}
      </div>

      {currentPosts.length > 0 &&
        currentPosts.map((item) => (
          <>
            <Container className="my-3">
              <Card border="primary" style={{ padding: "10px", width: "auto" }}>
                <Row>
                  <Col sm={4}>
                    <Card.Img
                      src="https://cdnn1.img.sputniknews.com/images/sharing/article/eng/1097220123.jpg?10972196131657621597"
                      width="300px"
                      height="300px"
                    />
                  </Col>
                  <Col sm={8}>
                    <Card>
                      <Card.Header>
                        {" "}
                        <h5>
                          <b>Title :</b> {item.name}{" "}
                        </h5>{" "}
                      </Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>
                            {" "}
                            <h5>
                              <b>Description :</b>{" "}
                            </h5>{" "}
                            {item.body}{" "}
                          </p>
                          <footer className="blockquote-footer">
                            {item.id}{" "}
                            <h5>
                              <b>Author e-mail :</b> {item.email}{" "}
                            </h5>
                            <cite title="Source Title"> </cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Container>
          </>
        ))}
      <br />
          <Paginations
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
    </>
  );
};
