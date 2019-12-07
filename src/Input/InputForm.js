import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export const InputForm = props => {
  const { title, inputs, handleInputChange, handleFinal } = props;
  const { player, score } = inputs;
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="player">Player</Label>
              <Input
                name="player"
                placeholder="Ex: Player 1"
                onChange={handleInputChange}
                value={player}
              />
            </FormGroup>
            <FormGroup>
              <Label for="score">Score</Label>
              <Input
                name="score"
                placeholder="Ex: 32342"
                onChange={handleInputChange}
                value={score}
              />
            </FormGroup>
            <Button type="submit" onClick={handleFinal}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
