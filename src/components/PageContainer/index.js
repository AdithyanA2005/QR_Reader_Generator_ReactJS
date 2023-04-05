import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function PageContainer(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
