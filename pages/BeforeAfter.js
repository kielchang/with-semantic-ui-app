import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";

const Container = styled("div")`
  background: #70a1e0;
  margin: 10px auto;
  padding: 20px;
  width: 80vw;
  border-radius: 10px;
`;

const Text = styled("p")`
  font-size: 20pt;
  &::before {
    content: "Hello";
    background: #bcff40;
    font-size: 20px;
  }
`;

export default () => {
  return (
    <>
      <Container>
        <Text>Here is some content</Text>
        <Text>白日依山盡，黃河路海流</Text>
      </Container>
    </>
  );
};
