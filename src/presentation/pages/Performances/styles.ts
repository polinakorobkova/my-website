import styled from 'styled-components';

const Header = styled.div`
  color: var(--color-accent);
  font-size: 35px;
  margin-top: 120px;
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding-left: 20px;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const Styled = {
  Header,
};
