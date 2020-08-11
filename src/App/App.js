import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Image from "../Component/Image";
import Text from "../Component/Text";
import { Button } from "react-bootstrap";

function App() {
const [inputList, setInputList] = useState("add text and upload image ");
  return (
    <div>
      <Container className="mt-5">
        <h4 className="p-2 text-center">New Forms</h4>
        <Text
          lableName="Username"
          placeholder={inputList}
          textBoxName="username"
          boxType="text"
          inputMaxLength={50}
        />
        
        <Image lableName="Upload Image" imageName="image" />
        <div className="text-center">
          <Button className="btn-primary">Submit</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
