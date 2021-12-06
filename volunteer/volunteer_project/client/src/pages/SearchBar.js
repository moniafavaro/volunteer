import React from "react";
import { Container, Form } from "react-bootstrap";
import "../styles/main.scss";

function SearchBar() {
  return (
    <Container className="search-input">
      <Form>
        <input type="text" placeholder="Search..." className="icon" />
      </Form>
    </Container>
  );
}

export default SearchBar;
