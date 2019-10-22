import styled from "styled-components";

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Page = props => {
  return (
    <>
      <div style={{ height: "calc(100vh - 60px)", width: "100%" }}>
        <Image src="https://picsum.photos/1080/1920" alt="image" />
      </div>
    </>
  );
};

export default Page;
