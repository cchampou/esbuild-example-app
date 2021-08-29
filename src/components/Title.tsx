import React from 'react';
import styled from '@emotion/styled';

const StyledH1 = styled('h1')`
  font-weight: lighter;
`;

interface titleProps {
  title: string;
}

export const Title: React.FunctionComponent<titleProps> = ({ title }) => (
  <StyledH1>{title}</StyledH1>
);

export default Title;
