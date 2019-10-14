import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";

const Container = styled("div")`
  background: #70a1e0;
  margin: 10px auto;
  width: 80vw;
  border-radius: 10px;

  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

const Col = styled("div")`
  margin: 10px;
  width: 47%;
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
