import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import PageContainer from "../components/Containers/PageContainer";
import GeneratorInput from "../components/GeneratorInput";
import specialQr from "../assets/special-qr.png"

export default function Home() {
  const navigate = useNavigate();
  const handleGeneratorBtnClick = () => navigate("/generate");

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
            <GeneratorInput handleSubmitBtnClick={handleGeneratorBtnClick} btnText="Generate"/>
          </HeroActions>
        </HeroContent>
      </SectionContainer>
    </PageContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 34rem;
`;
const HeroBg = styled.img`
  display: block;
  height: auto;
  width: 95%;
  max-height: 34rem;
  max-width: 34rem;
  margin: auto;
`;
const HeroContent = styled.div`
  position: absolute;
  inset: 0%;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  justify-content: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  min-width: 100%;
`;
const HeroHeading = styled.h1`
  font-size: 2rem;
  text-align: center;

  span {
    font-family: "Orbitron", sans-serif;
  }

  @media only screen and (min-width: 320px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 475px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 650px) {
    font-size: 4rem;
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
