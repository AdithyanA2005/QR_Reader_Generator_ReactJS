import React from "react";
import styled from "styled-components";
import PageContainer from "../components/Containers/PageContainer";
import GeneratorInput from "../components/GeneratorInput";
import specialQr from "../assets/special-qr.png"
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <PageContainer>
      <SectionContainer>
        <HeroBg src={specialQr} />
        <HeroContent>
          <HeroHeading>
            <span>AdiQR - </span> Generate & scan qrcodes
          </HeroHeading>
          <HeroActions>
            <ScanBtn to="/scan">Scan QR Codes</ScanBtn>
            <GeneratorInput btnText="Generate"/>
          </HeroActions>
        </HeroContent>
      </SectionContainer>
    </PageContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  margin-top: 10%;
`;
const HeroBg = styled.img`
  display: block;
  height: 34rem;
  width: 34rem;
  margin: auto;
`;
const HeroContent = styled.div`
  position: absolute;
  inset: 5%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
`;
const HeroHeading = styled.h1`
  font-size: 4rem;
  text-align: center;

  span {
    font-family: "Orbitron", sans-serif;
  }
`;
const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 1rem;
`;
const ScanBtn = styled(NavLink)`
  color: white;
  background-color: black;
  width: 100%;
  max-width: 30rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
  padding: 1.2rem 3rem;
  border-radius: 15px;
`