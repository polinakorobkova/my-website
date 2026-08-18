import { Image as ANTImage } from 'antd';
import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RLink)`
  display: inline-block;
  max-width: max-content;
  font-family: 'Syne Mono', monospace;
  font-size: 20px;
  color: var(--color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  text-align: left;
  orphans: 3;
  widows: 3;
  max-width: 550px;
  font-size: 21px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Date = styled.p`
  margin: 5px 0 0 0;
  font-size: 20px;
  color: var(--color-text);
`;

const Title = styled.h1`
  color: var(--color-accent);
  font-family: 'Syne Mono', monospace;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const PhotoWrapper = styled.div<{ $align?: 'left' | 'right' }>`
  max-width: 550px;
  margin-top: 10px;
  margin-bottom: 10px;

  ${({ $align }) =>
    $align === 'right' &&
    `
    margin-left: 25%;
  `}
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Quote = styled.blockquote`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1;
  color: var(--color-accent);
  font-weight: 600;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25%;
  z-index: 2;

  @media (max-width: 900px) {
    margin-left: 15%;
    padding-left: 65px;
    max-width: 500px;
    font-size: 40px;
  }

  @media (max-width: 670px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Styled = {
  Link,
  Paragraph,
  Title,
  Date,
  PhotoWrapper,
  Image,
  Quote,
};
