import { Image as ANTImage } from 'antd';
import styled from 'styled-components';

const DateColumn = styled.div`
  font-size: 20px;
  color: var(--color-text);
  opacity: 0.7;
  min-width: 140px;
  flex-shrink: 0;

  @media (max-width: 540px) {
    font-size: 16px;
    min-width: auto;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  font-size: 20px;
  max-width: 430px;
  color: var(--color-accent);
  margin-bottom: 40px;
  font-weight: 700;

  @media (max-width: 540px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--color-text);
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: 20px;
  margin-bottom: 20px;
`;

const NamesBlock = styled.div`
  margin-bottom: 4px;
  margin-bottom: 30px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
`;

const Prof = styled.div`
  font-size: 20px;
  color: var(--color-text);
`;

const CardsContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  border-top: 1px solid var(--color-accent);
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const CreditText = styled.span`
  font-size: 18px;
  color: inherit;
  margin-top: 4px;
  display: block;
`;

const HighlightedContentContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;

  && {
    color: white;
  }

  ${Title}, ${Text}, ${DateColumn}, ${Name}, ${Prof}, ${Paragraph}, ${NamesBlock} {
    color: white;
  }

  ${DateColumn} {
    opacity: 1;
  }
`;

const DetailsContainer = styled.div`
  padding: 0 20px 20px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeaderRow = styled.div`
  display: flex;
  gap: 140px;

  @media (max-width: 900px) {
    gap: 80px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LinkText = styled.a`
  font-size: 20px;
  color: var(--color-accent);
  text-decoration: none;
  max-width: max-content;

  &:hover {
    text-decoration: underline;
  }
`;

const GridImage = styled(ANTImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoGrid7a = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 240px 200px 180px 200px 150px 150px 150px;
  gap: 10px;
  max-width: 900px;

  @media (max-width: 900px) {
    grid-template-rows: 180px 150px 140px 150px 120px 120px 120px;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PhotoGrid8a = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 250px 300px;
  grid-template-rows: 400px 180px 170px 370px 150px 300px;
  gap: 10px;
  max-width: 900px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PhotoGrid2 = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 340px;
  grid-template-rows: 400px 180px 250px 300px;
  gap: 10px;
  max-width: 900px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PhotoGrid3 = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 340px;
  grid-template-rows: 150px 150px 60px 300px 100px 700px;
  gap: 10px;
  max-width: 900px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const SinglePhoto = styled.div`
  max-width: 600px;

  @media (max-width: 670px) {
    max-width: 100%;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px;

  @media (max-width: 670px) {
    max-width: 100%;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 340px;

  @media (max-width: 600px) {
    height: 220px;
  }
`;

const GridCell = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Styled = {
  CardsContainer,
  ContentContainer,
  HighlightedContentContainer,
  DetailsContainer,
  HeaderRow,
  DateColumn,
  InfoColumn,
  Title,
  Text,
  Paragraph,
  NamesBlock,
  Name,
  Prof,
  LinkText,
  GridImage,
  GridCell,
  PhotoGrid7a,
  PhotoGrid8a,
  PhotoGrid2,
  PhotoGrid3,
  SinglePhoto,
  VideoContainer,
  Iframe,
  CreditText,
};
