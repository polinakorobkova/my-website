import { Image as ANTImage } from 'antd';
import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const ExternalLink = styled.a`
  max-width: max-content;
  font-size: 20px;
  text-transform: lowercase;
  color: var(--color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: var(--color-accent);
  font-family: 'Syne Mono', monospace;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const HeaderSection = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  max-width: 1100px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CoverImage = styled(ANTImage)`
  width: 550px !important;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    width: 100% !important;
    height: auto;
    max-width: 500px;
  }

  @media (max-width: 670px) {
    max-width: 100%;
  }
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
  text-transform: lowercase;
`;

const Paragraph = styled.p`
  text-align: left;
  orphans: 3;
  widows: 3;
  max-width: 550px;
  font-size: 21px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const AccentParagraph = styled.p`
  text-align: left;
  orphans: 3;
  widows: 3;
  max-width: 550px;
  font-size: 21px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: var(--color-accent);
  font-weight: 600;
`;

const Quote = styled.blockquote`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1;
  color: var(--color-accent);
  font-weight: 600;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 40px;
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

const TestimonialWrapper = styled.div`
  max-width: 1100px;
  margin-bottom: 40px;
`;

const Testimonial = styled.blockquote`
  font-family: 'Syne Mono', monospace;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-accent);
  font-style: italic;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: auto;
  text-align: right;
  padding-left: 40px;
  border-left: 2px solid var(--color-accent);
`;

const TestimonialAuthor = styled.p`
  font-family: 'Syne Mono', monospace;
  font-size: 16px;
  color: var(--color-accent);
  font-style: normal;
  font-weight: 600;
  max-width: 600px;
  margin-top: 15px;
  margin-left: auto;
  text-align: right;
`;

const PhotoPair = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
  max-width: 1000px;
  margin-top: 10px;
  margin-bottom: 40px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const PhotoPairItem = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index === 1 &&
    `
    margin-top: 300px;
  `}

  @media (max-width: 900px) {
    margin-top: 150px !important;
  }

  @media (max-width: 670px) {
    margin-top: 0 !important;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, auto);
  gap: 20px;
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 40px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PhotoGridItem = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index === 0 &&
    `
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  `}
  ${({ $index }) =>
    $index === 1 &&
    `
    grid-column: 3 / 9;
    grid-row: 2 / 6;
  `}
  ${({ $index }) =>
    $index === 2 &&
    `
    grid-column: 1 / 4;
    grid-row: 6 / 8;
  `}
  ${({ $index }) =>
    $index === 3 &&
    `
    grid-column: 4 / 8;
    grid-row: 6 / 9;
  `}

  @media (max-width: 900px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  @media (max-width: 670px) {
    grid-column: 1 !important;
    grid-row: auto !important;
  }
`;

const PhotoWide = styled.div`
  max-width: 1100px;
  margin-top: 10px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: auto;
  }
`;

const VideoWrapper = styled.div`
  max-width: 800px;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin-top: 10px;
  margin-bottom: 40px;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const VideoGridItem = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Iframe = styled.iframe<{ height?: string }>`
  width: 100%;
  aspect-ratio: ${({ height }) => (height ? 'auto' : '16 / 9')};
  height: ${({ height }) => height || 'auto'};
`;

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 31px;
  width: 90%;
  max-width: 845px;
  height: 110px;
  border: 2px solid var(--color-accent);
  background: var(--color-background);

  @media (max-width: 1280px) {
    width: 70%;
    left: calc(50% - 80px);
    transform: translateX(-50%);
  }
  @media (max-width: 1085px) {
    left: calc(50% - 100px);
    transform: translateX(-50%);
  }
  @media (max-width: 670px) {
    width: 98%;
    padding: 5px 10px;
    height: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 255px) {
    height: 105px;
  }
`;

const CreditText = styled.span`
  font-size: 14px;
  color: var(--color-text);
  opacity: 0.7;
  margin-top: 4px;
  display: block;
`;

export const Styled = {
  Title,
  HeaderSection,
  CoverImage,
  Image,
  Link,
  ExternalLink,
  Paragraph,
  AccentParagraph,
  Quote,
  TestimonialWrapper,
  Testimonial,
  TestimonialAuthor,
  PhotoPair,
  PhotoPairItem,
  PhotoGrid,
  PhotoGridItem,
  PhotoWide,
  VideoWrapper,
  VideoGrid,
  VideoGridItem,
  Iframe,
  PlayerContainer,
  CreditText,
};
