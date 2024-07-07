import React from 'react';
import { data } from 'domain/mock/about';
import { Styled } from './styles';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';

export const About: React.FC = () => {
  const { photo, description, cv } = data;

  const paragraphs = description.trim().split('\n').filter(paragraph => paragraph.length > 0);

  const PreviewType = {
    mask: null,
    toolbarRender: ()=> null,
  };

  return (
    <ContentWrapper position='top'>
      <Styled.GlobalStyle />
      <Styled.Image 
        className="custom-preview"
        src={photo} 
        width={'180px'}
        height={'180px'}
        preview={PreviewType}
        alt='polina korobkova'>
      </Styled.Image>
      {paragraphs.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      <Styled.Sv to={cv} target="_blank" rel="noopener noreferrer">{`cv >`}</Styled.Sv>
    </ContentWrapper>
  );
};
