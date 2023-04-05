import React from "react";
import styled from "styled-components";
import { ReactComponent as CameraSVG } from "../../assets/camera-solid.svg";

export default function ScannerLoader() {
  // This will be shown until video starts
  return (
    <LoaderWrapper>
      <CameraIcon />
      <Text>Loading Camera</Text>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem; 
  animation: crescendo 1s alternate infinite ease-in;

  @keyframes crescendo {
    0%   {transform: scale(.9);}
    100% {transform: scale(1.1);}
  }
`;
const CameraIcon = styled(CameraSVG)`
  height: 1.5rem;
  width: 1.5rem;
  
  @media only screen and (min-width: 330px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;
const Text = styled.h3`
font-size: 1rem;
  @media only screen and (min-width: 330px) {
    font-size: 1.5rem;
  }
`;
