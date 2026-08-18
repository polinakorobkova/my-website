import { Image as ANTImage } from 'antd';
import styled from 'styled-components';

const Header = styled.div`
  color: var(--color-accent);
  font-size: 35px;
  margin-top: 120px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  margin-top: -180px;

  @media (max-width: 900px) {
    margin-top: 0px;
  }
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: auto;
  object-position: center top;
  object-fit: cover;
  filter: grayscale(100%);
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

const CvLink = styled.a`
  display: inline-block;
  width: fit-content;
  font-family: 'Syne Mono', monospace;
  font-size: 28px;
  color: var(--color-accent);
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Styled = {
  PhotoWrapper,
  Image,
  Paragraph,
  Quote,
  CvLink,
  Header,
};
