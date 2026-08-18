import { Image as ANTImage} from 'antd';
import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const CoverImage = styled(ANTImage)`
  width: 550px !important;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 670px) {
    width: 100% !important;
    height: auto;
    max-width: 300px;
  }
`;

const Image = styled(ANTImage)`
  object-position: center;
  object-fit: cover;
`;
const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
`;
const Paragraph = styled.p`
  text-align: justify;
  max-width: 550px;
  font-size: 20px;
  text-transform: lowercase;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 550px;  
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
const Iframe = styled.iframe`
  width: 50%;
  height: 50%;

  @media (max-width: 1660px) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
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
  Link,
  CoverImage,
  Image,
  Paragraph,
  ImageContainer,
  PlayerContainer,
  Iframe,
  CreditText,
};