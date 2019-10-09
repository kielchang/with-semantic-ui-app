import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";

const Container = styled("div")`
  background: #70a1e0;
  margin: 10px auto;
  width: 80vw;
  border-radius: 10px;
  &::after {
    display: table;
    content: "";
    clear: both;
  }
`;

const Col = styled("div")`
  margin: 20px;
  width: 30%;
  float: left;
  min-height: 40vh;
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
      </Container>
    </>
  );
};
