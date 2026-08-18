import React from 'react';
import { data } from 'domain/mock/about';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Highlight } from 'presentation/components/Highlight/Highlight';
import { Styled } from './styles';
import { Loader } from 'presentation/components/Loader/Loader';

const renderHighlightedText = (text: string) => {
  const parts = text.split(/\|\|(.+?)\|\|/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <Highlight key={i}>{part}</Highlight> : part,
  );
};

export const About: React.FC = () => {
  const { photo, cv, sections } = data;

  return (
    <ContentWrapper position='top'>
      <Styled.Header>About</Styled.Header>
      {sections.map((section, index) => {
        if (section.type === 'photo') {
          return (
            <Styled.PhotoWrapper key={index}>
              <Styled.Image
                src={photo}
                preview={false}
                placeholder={<Loader />}
                alt='lin korobkova'
              />
            </Styled.PhotoWrapper>
          );
        }
        if (section.type === 'quote') {
          return <Styled.Quote key={index}>{section.content}</Styled.Quote>;
        }
        if (section.type === 'text' && section.content === '— lin (they/them)') {
          return (
            <Styled.Paragraph key={index} style={{ fontSize: '28px' }}>
              <Highlight>{section.content}</Highlight>
            </Styled.Paragraph>
          );
        }
        return (
          <Styled.Paragraph key={index}>
            {section.content ? renderHighlightedText(section.content) : null}
          </Styled.Paragraph>
        );
      })}
      <Styled.CvLink href={cv} target='_blank' rel='noopener noreferrer'>
        cv {'>'}
      </Styled.CvLink>
    </ContentWrapper>
  );
};
