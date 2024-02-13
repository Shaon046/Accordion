// components/Accordion.js
import React, { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  margin: 2px 2px;

  color: gray;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  box-shadow: 0px 1px 6px gray;
  
`;

const AccordionBody = styled.div`
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  padding: 10px;
  padding-top: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 20px;
  border-right: 2px solid gray;

  &:hover {
    label {
      letter-spacing: 0.5px;
      transition: 1s;
    }
  }

  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9),
  &:nth-child(12) {
    border-right: none;
    padding-right: 0;
  }
`;



const Input = styled.input`
  width: 70%;
  height: 35px;
  border: none;
  border-bottom: 1px solid gray;
  border-radius: 2px;
  font-size: 16px;

  font-weight: 400;
  color: #000000;
  padding-left: 20px;
  transition: border-color 0.2s;


  
  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid gray;
    &::placeholder {
     
     color: transparent;
  }
  }


  
`;

const LabelContainer = styled.div`
  margin-top: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: #ffffff;
  transform: translate(30%, 40%);
  z-index: 999;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #0c2c57dc;
  z-index: 888;
`;

const Select = styled.select`
  width: 70%;
  height: 40px;

  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  padding-left: 20px;
  transition: border-color 0.2s;

  box-shadow: inset 0px 0px 2px gray, inset -1px -1px 3px white;

  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

const ButtonCollection = styled.div`
  margin: 40px 40px 40px 10px;
`;

const Button = styled.button`
  height: 45px;
  width: 100px;
  border-style: none;

  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ color }) => color};
  background-color: ${({ colorBG }) => colorBG};
  border: 1px solid gray;
  border-radius: 40px;
  transition: 0.5s;
  &:hover {
    background: ${({ hoverColorBG }) => hoverColorBG};
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const Accordion = ({ title, education, currentLocation, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>
        <div>{title}</div>
        <div>{education}</div>
        <div> {currentLocation}</div>
      </AccordionHeader>
      <>
        <AccordionBody isOpen={isOpen}>
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " />
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " />
          </InputContainer>{" "}
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " />
          </InputContainer>{" "}
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " type="date" />
          </InputContainer>{" "}
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " />
          </InputContainer>{" "}
          <InputContainer>
            <LabelContainer>
              {" "}
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Input placeholder="Input " />
          </InputContainer>{" "}
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
        </AccordionBody>

        <AccordionBody isOpen={isOpen}>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>

          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <Label htmlFor="">field name</Label>
            </LabelContainer>

            <Select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </InputContainer>

          <ButtonCollection>
            <Button
              color={"#174ea6"}
              colorBG={"white"}
              hoverColorBG={" #174ea6"}
              hoverColor={"white"}
            >
              save
            </Button>{" "}
            <Button
              color={"white"}
              colorBG={"#a61717"}
              hoverColorBG={"white"}
              hoverColor={" #a61717"}
            >
              cancel
            </Button>{" "}
            <Button
              color={"white"}
              colorBG={"green"}
              hoverColorBG={"white"}
              hoverColor={" green"}
            >
              whatsapp
            </Button>
          </ButtonCollection>
        </AccordionBody>
      </>
    </AccordionWrapper>
  );
};

export default Accordion;
