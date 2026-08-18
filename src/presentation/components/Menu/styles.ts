import { NavLink as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div<{ $isHome?: boolean }>`
  position: ${({ $isHome }) => ($isHome ? 'absolute' : 'fixed')};
  top: 0;
  right: 0;
  display: flex;
  gap: 20px;
  padding-top: 30px;
  padding-right: 30px;
  flex-direction: column;
  align-items: end;

  @media (max-width: 1315px) {
    display: none;
  }
`;
const Link = styled(RLink)<{ $isActive: boolean }>`
  position: relative;
  font-size: 20px;
  color: var(--color-accent);

  ${({ $isActive }) =>
    $isActive &&
    `
    color: var(--color-text);

    &::before {
      position: absolute;
      content: '';
      display: inline-block;
      width: 7px;
      height: 7px;
      background-color: var(--color-text);
      border-radius: 50%;
      left: -10px;
      top: 55%;
      transform: translateY(-50%);
    }
  `}

  &:hover {
    color: var(--color-text);
  }
`;

export const Styled = {
  Container,
  Link,
};
