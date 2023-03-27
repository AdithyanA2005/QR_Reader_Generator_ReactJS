import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SubHeading(props) {
  return <Title>{props.title}</Title>;
}

const Title = styled.h2`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
