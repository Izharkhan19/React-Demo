import React from "react";
import MainNavbar from "./MainNavbar";
import { News } from "./News";
import { Container } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <>
      <MainNavbar />
      <Container className="my-3" fluid>
        <News />
      </Container>
      <hr />
      <div
        className="container"
        style={{
          width: "auto",
          padding: "50px",
          backgroundColor: "pink",
          height: "200px",
        }}
      >
  {/* Footer  */}
        <div className="row">
          <div className="col-sm-3">
            <h4> Link's </h4>
            <ul>
              <li>Home</li>
              <li>Doc's</li>
              <li>Examples</li>
              <li>Themes</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4> Guide </h4>
            <ul>
              <li>Home</li>
              <li>Doc's</li>
              <li>Examples</li>
              <li>Themes</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4> Project's </h4>
            <ul>
              <li>Comercials</li>
              <li> E-State's </li>
              <li> Industries </li>
              <li>Themes</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4> Comunity </h4>
            <ul>
              <li>Home</li>
              <li>Doc's</li>
              <li>Examples</li>
              <li>Themes</li>
            </ul>
          </div>
        </div>
      </div>
      <span>  <hr /> </span>
    </>
  );
};
