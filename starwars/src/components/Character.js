// Write your Character component here
import React, {useState} from "react";
import {
  Collapse,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import styled from "styled-components";

const Character = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const Characteristics = styled.ul`
    list-style: none;
    margin-left: -2.4rem;
  `;

  return (
    <Card
      body
      key={props.name}
      className="text-left"
      style={{
        margin: "2rem 0",
        opacity: ".85",
        textTransform: "capitalize",
      }}
    >
      <CardBody>
        <CardTitle className="text-center">
          <h2>{props.name}</h2>
        </CardTitle>
        <CardSubtitle
          style={{margin: "1rem"}}
          className="text-center"
          onClick={() => toggle()}
        >
          <Button color="warning">See Characteristics</Button>{" "}
        </CardSubtitle>
        <Characteristics>
          <Collapse isOpen={isOpen}>
            <ListGroup>
              <ListGroupItem>Gender: {props.gender}</ListGroupItem>
              <ListGroupItem>Birth Year: {props.birthYear}</ListGroupItem>
              <ListGroupItem>Eye Color: {props.eyeColor}</ListGroupItem>
              <ListGroupItem>Hair Color: {props.hairColor}</ListGroupItem>
              <ListGroupItem>Height: {props.height}</ListGroupItem>
              <ListGroupItem>Mass: {props.mass}</ListGroupItem>
            </ListGroup>
          </Collapse>
        </Characteristics>
        {/* </CardText> */}
      </CardBody>
    </Card>
  );
};

export default Character;
