import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Heading(props) {
  return <Title>{props.title}</Title>;
}

const Title = styled.h1`
  margin-bottom: 1rem;
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
