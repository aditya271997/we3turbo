import React from "react";
import Form from "react-bootstrap/Form";
function Text(props) {
console.log("---props---", props)
  const { boxType, placeholder, textBoxName, lableName, inputMaxLength, bettu } = props;
  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>{lableName}</Form.Label>
          <Form.Control
            type={boxType}
            placeholder={placeholder}
            name={textBoxName}
            maxLength={inputMaxLength}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Text;
