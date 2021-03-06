import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import json from "./countryPicker.json";

const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 2rem 1.5rem;
  border-radius: 3rem;
  background: #7245c7;
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  margin-bottom: 1rem;
  border: 0;
  background: transparent;
  color: ${rgba("white", 0.85)};

  &:focus {
    border-color: ${rgba("white", 0.5)};
  }

  &::placeholder {
    color: ${rgba("white", 0.5)};
  }
`;

const InputWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  padding: 0;
  border: 0;
  color: ${rgba("white", 0.85)};
  background: transparent;
`;

const InputPlaceholder = styled.div`
  color: ${rgba("white", 0.5)};
`;

const InputIcon = styled.span`
  color: ${rgba("white", 0.5)};
`;

const Wrapper = styled.div`
  position: relative;
`;

const Dialog = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 2;
  top: 44px;
  left: 0;
  padding: 1.725rem 1.5rem;
  width: 100%;
  height: 278px;
  border-radius: 3rem;
  visibility: ${(p) => (p.open ? "visible" : "hidden")};
  opacity: ${(p) => (p.open ? 1 : 0)};
  transform: translateY(${(p) => (p.open ? 0 : "1rem")});
  background: #fff;
  transition-property: visibility, opacity, transform;
  transition-duration: 0.35s;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 0.5rem;
  background: transparent;
  text-align: left;
  transition: background 0.25s;

  &:hover {
    background: ${rgba("#834fe6", 0.1)};
  }
`;

const Flag = styled.img`
  flex: 0 0 30px;
  width: 30px;
`;

const Country = styled.div`
  flex: 1 1 auto;
  margin-left: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${rgba("black", 0.75)};
`;

const Code = styled.div`
  flex: 0 1 auto;
  color: ${rgba("black", 0.37)};
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 0;
  border: 0;
  border-radius: 3rem;
  background: #482788;
  color: white;
`;

const CountryPicker = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");

  const cdnPath = (name) =>
    `https://cdn.jsdelivr.net/gh/low6dev/fiver-react-assets@main/flags/${name.replace(
      /\s+/g,
      "-"
    )}.png`;

  return (
    <Card>
      <Wrapper>
        <InputWrapper onClick={() => setOpen(!open)}>
          <InputPlaceholder>
            {country === "" ? "Country" : country}
          </InputPlaceholder>
          <InputIcon className="material-icons">
            {open ? "close" : "expand_more"}
          </InputIcon>
        </InputWrapper>
        <Dialog open={open}>
          {json.map((c) => (
            <Row
              onClick={() => {
                setOpen(false);
                setCountry(c.name);
              }}
            >
              <Flag src={cdnPath(c.name)} />
              <Country>{c.name}</Country>
              <Code>{c.code}</Code>
            </Row>
          ))}
        </Dialog>
      </Wrapper>

      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Button>Save</Button>
    </Card>
  );
};

export default CountryPicker;
