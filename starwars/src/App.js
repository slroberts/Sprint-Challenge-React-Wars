import React, {useState, useEffect} from "react";
import "./App.css";

import axios from "axios";
import Character from "./components/Character";
import {Container, Row, Col, Navbar, NavbarBrand} from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Bruh!", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <h1 className="Header">Star Wars Characters List</h1>
        </NavbarBrand>
      </Navbar>

      <Container>
        <Row>
          <Col sm="12" md={{size: 4, offset: 4}}>
            {" "}
            {characters.map((character) => {
              return (
                <Character
                  key={character.name}
                  name={character.name}
                  gender={character.gender}
                  birthYear={character.birth_year}
                  eyeColor={character.eye_color}
                  hairColor={character.hair_color}
                  height={character.height}
                  mass={character.mass}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
