import React from 'react';
import { Styled } from './styles';

interface AccentProps {
  children: React.ReactNode;
}

export const Accent: React.FC<AccentProps> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
