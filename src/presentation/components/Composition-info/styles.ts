import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 650px;

  @media (max-width: 670px) {
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 22px 0;
  border-bottom: 1px solid var(--color-accent);
  gap: 20px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 670px) {
    flex-direction: column;
    gap: 4px;
    padding: 16px 0;
  }
`;

const Label = styled.span`
  font-family: 'Syne Mono', monospace;
  font-size: 21px;
  color: var(--color-accent);
  white-space: nowrap;

  @media (max-width: 670px) {
    font-size: 16px;
  }
`;

const Value = styled.span`
  font-size: 21px;
  color: var(--color-text);
  text-align: right;
  font-family: 'Syne Mono', monospace;

  @media (max-width: 670px) {
    font-size: 16px;
    text-align: left;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-size: 24px;
  color: var(--color-text);
  text-decoration: none;
  margin-top: 15px;

  @media (max-width: 670px) {
    font-size: 20px;
  }
`;

export const Styled = {
  Container,
  Row,
  Label,
  Value,
  ProjectLink,
};
