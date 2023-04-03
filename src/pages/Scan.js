import React from "react";
import styled from "styled-components";
import PageContainer from "../components/Containers/PageContainer";
import commingSoonImg from "../assets/comming-soon.jpg";

export default function Scan() {
  return (
    <PageContainer>
      <ImageContainer alt="Designed by starline / Freepik" src={commingSoonImg} />
      {/* <a href="http://www.freepik.com">Designed by starline / Freepik</a> */}
    </PageContainer>
  );
}

const ImageContainer = styled.img`
  display: flex;
  height: auto;
  width: 90%;
  margin: auto;
`
