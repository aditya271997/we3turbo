import React from "react";
import Form from "react-bootstrap/Form";

function Image(props) {
console.log("---props---", props)
  const { imageName, lableName } = props;
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.File id={imageName} label={lableName} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Image;
