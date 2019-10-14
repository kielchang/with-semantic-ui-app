import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";

const Container = styled("div")`
  background: #70a1e0;
  margin: 10px auto;
  padding: 30px;
  width: 80vw;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  grid-gap: .25em;
`;

const Col = styled("div")`
  padding: 15px;
  border: 1px solid black;
`;

const Lorem = () => <span>{loremIpsum({ count: 8, units: "sentences", random: Math.random })}</span>;

export default () => {
  return (
    <>
      <Container>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Lorem />
        </Col>
      </Container>
    </>
  );
};
