import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const Header = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  height: 100px;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 20px;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    height: 135px;
  }
`;
const Content = styled.div`
  grid-column: 1;
  grid-row: 2;
  background-color: var(--color-background);
  overflow: hidden;

  @media (max-width: 670px) {
    grid-column: 1;
  }
`;

const NoteSlider = styled.div`
  width: 100%;
  height: 500px;
  min-height: 0;
  overflow: hidden;
  padding-top: 100px;

  @media (max-width: 1015px) {
    padding-top: 30px;
  }
`;

const NoteTrack = styled.div`
  display: flex;
  height: 500px;
  width: max-content;
  animation: slideRightToLeft 60s linear infinite;
  will-change: transform;

  @keyframes slideRightToLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const NoteImageWrap = styled.div`
  height: 500px;
  flex-shrink: 0;
  overflow: hidden;
`;

const NoteImage = styled.img`
  height: 500px;
  width: auto;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const Link = styled(RLink)`
  color: var(--color-accent);
  font-size: 30px;
  height: min-content;
  margin-top: 12px;
  margin-bottom: 5px;
  text-decoration: none;
  font-family: 'Syne Mono', monospace;
  &:hover {
    color: var(--color-accent);
  }
`;

const SubLink = styled.div`
  font-size: 20px;
  line-height: 25px;
  font-family: 'Syne Mono', monospace;

  @media (max-width: 490px) {
    max-width: 300px;
  }
  @media (max-width: 360px) {
    max-width: 200px;
  }
`;

export const Styled = {
  Layout,
  Header,
  Content,
  NoteSlider,
  NoteTrack,
  NoteImageWrap,
  NoteImage,
  Container,
  Link,
  SubLink,
};
