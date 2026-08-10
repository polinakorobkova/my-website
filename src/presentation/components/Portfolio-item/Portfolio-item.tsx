import React from 'react';
import { Data, Section } from 'domain/mock/performances';
import { HighlightBlock } from 'presentation/components/Highlight-block/Highlight-block';
import { Loader } from 'presentation/components/Loader/Loader';
import AudioPlayer from 'presentation/components/Audio-player/Audio-player';
import { useMediaQuery } from 'presentation/hooks/useMediaQuery';
import { Styled } from './styles';

interface Prop {
  data: Data;
}

const PreviewType = {
  mask: null,
  toolbarRender: () => null,
};

const renderSection = (section: Section, index: number, alt?: string, isMobile?: boolean) => {
  switch (section.type) {
    case 'text':
      return <Styled.Paragraph key={index}>{section.content}</Styled.Paragraph>;

    case 'names':
      return (
        <Styled.NamesBlock key={index}>
          <Styled.Name>{section.name}</Styled.Name>
          <Styled.Prof>{section.prof}</Styled.Prof>
        </Styled.NamesBlock>
      );

    case 'photo':
      return (
        <Styled.SinglePhoto key={index}>
          <Styled.GridImage
            src={section.src}
            preview={PreviewType}
            placeholder={<Loader />}
            alt={alt}
          />
          {section.content && <Styled.CreditText>{section.content}</Styled.CreditText>}
        </Styled.SinglePhoto>
      );

    case 'photo-pair':
      return (
        <Styled.PhotoGrid7a key={index}>
          {section.images?.map((image, i) => {
            const positions = [
              { gridColumn: '1 / 5', gridRow: '1 / 3' }, // Photo 1: cols 1-4, rows 1-2
              { gridColumn: '5 / 6', gridRow: '1 / 2' }, // Photo 2: col 5, row 1
              { gridColumn: '4 / 5', gridRow: '3 / 4' }, // Photo 3: col 4, row 3
              { gridColumn: '5 / 6', gridRow: '3 / 4' }, // Photo 4: col 5, row 3
              { gridColumn: '6 / 7', gridRow: '3 / 4' }, // Photo 5: col 6, row 3
              { gridColumn: '1 / 4', gridRow: '4 / 6' }, // Photo 6: cols 1-3, rows 4-5
              { gridColumn: '4 / 7', gridRow: '4 / 8' }, // Photo 7: cols 4-6, rows 4-7
            ];
            const pos = isMobile ? {} : positions[i] || {};
            return (
              <Styled.GridCell key={i} style={pos}>
                <Styled.GridImage
                  src={image.src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={alt}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.GridCell>
            );
          })}
        </Styled.PhotoGrid7a>
      );

    case 'photo-grid':
      return (
        <Styled.PhotoGrid8a key={index}>
          {section.images?.map((image, i) => {
            const positions = [
              { gridColumn: '1 / 4', gridRow: '1 / 2' },
              { gridColumn: '4 / 5', gridRow: '1 / 2' },
              { gridColumn: '2 / 3', gridRow: '2 / 3' },
              { gridColumn: '3 / 4', gridRow: '2 / 3' },
              { gridColumn: '3 / 4', gridRow: '3 / 4' },
              { gridColumn: '3 / 5', gridRow: '4 / 5' },
              { gridColumn: '3 / 4', gridRow: '5 / 6' },
              { gridColumn: '4 / 5', gridRow: '5 / 6' },
              { gridColumn: '1 / 4', gridRow: '6 / 8' },
            ];
            const pos = isMobile ? {} : positions[i] || {};
            return (
              <Styled.GridCell key={i} style={pos}>
                <Styled.GridImage
                  src={image.src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={alt}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.GridCell>
            );
          })}
        </Styled.PhotoGrid8a>
      );

    case 'photo-grid-2':
      return (
        <Styled.PhotoGrid2 key={index}>
          {section.images?.map((image, i) => {
            const positions = [
              { gridColumn: '1 / 3', gridRow: '1 / 2' },
              { gridColumn: '3 / 4', gridRow: '1 / 2' },
              { gridColumn: '1 / 2', gridRow: '3 / 4' },
              { gridColumn: '2 / 4', gridRow: '2 / 4' },
              { gridColumn: '2 / 3', gridRow: '4 / 5' },
            ];
            const pos = isMobile ? {} : positions[i] || {};
            return (
              <Styled.GridCell key={i} style={pos}>
                <Styled.GridImage
                  src={image.src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={alt}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.GridCell>
            );
          })}
        </Styled.PhotoGrid2>
      );
    case 'photo-grid-3':
      return (
        <Styled.PhotoGrid3 key={index}>
          {section.images?.map((image, i) => {
            const positions = [
              { gridColumn: '1 / 3', gridRow: '1 / 4' },
              { gridColumn: '3 / 4', gridRow: '2 / 4' },
              { gridColumn: '2 / 3', gridRow: '4 / 6' },
              { gridColumn: '3 / 4', gridRow: '4 / 5' },
              { gridColumn: '1 / 2', gridRow: '6 / 7' },
              { gridColumn: '2 / 4', gridRow: '6 / 7' },
            ];
            const pos = isMobile ? {} : positions[i] || {};
            return (
              <Styled.GridCell key={i} style={pos}>
                <Styled.GridImage
                  src={image.src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={alt}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.GridCell>
            );
          })}
        </Styled.PhotoGrid3>
      );

    case 'video':
      return (
        <Styled.VideoContainer key={index}>
          <Styled.Iframe
            src={section.src}
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </Styled.VideoContainer>
      );

    case 'audio':
      return section.src ? (
        <AudioPlayer key={index} src={section.src} trackName={section.content || ''} />
      ) : null;

    case 'link':
      return (
        <Styled.LinkText
          key={index}
          href={section.href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {section.label || section.content}
        </Styled.LinkText>
      );

    default:
      return null;
  }
};

export const PortfolioItem: React.FC<Prop> = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 670px)');

  const header = (
    <Styled.HeaderRow>
      <Styled.DateColumn>{data.data}</Styled.DateColumn>
      <Styled.InfoColumn>
        <Styled.Title>{data.title}</Styled.Title>
        {data.sections?.map((section, index) => {
          if (section.type === 'text') {
            return <Styled.Text key={index}>{section.content}</Styled.Text>;
          }
          if (section.type === 'names') {
            return (
              <Styled.NamesBlock key={index}>
                <Styled.Name>{section.name}</Styled.Name>
                <Styled.Prof>{section.prof}</Styled.Prof>
              </Styled.NamesBlock>
            );
          }
          return null;
        })}
      </Styled.InfoColumn>
    </Styled.HeaderRow>
  );

  const photoSections = data.sections?.filter(
    (s) => s.type === 'photo-pair' || s.type === 'photo-grid' || s.type === 'photo-grid-2' || s.type === 'photo-grid-3',
  );

  const otherSections = data.sections?.filter(
    (s) =>
      s.type !== 'text' &&
      s.type !== 'names' &&
      s.type !== 'photo-pair' &&
      s.type !== 'photo-grid' &&
      s.type !== 'photo-grid-2' &&
      s.type !== 'photo-grid-3',
  );

  if (data.active) {
    return (
      <HighlightBlock>
        <Styled.HighlightedContentContainer>{header}</Styled.HighlightedContentContainer>
        <Styled.DetailsContainer>
          {photoSections?.map((section, index) =>
            renderSection(section, index, data.title, isMobile),
          )}
          {otherSections?.map((section, index) =>
            renderSection(section, index + 100, data.title, isMobile),
          )}
        </Styled.DetailsContainer>
      </HighlightBlock>
    );
  }

  return (
    <Styled.CardsContainer>
      <Styled.ContentContainer>{header}</Styled.ContentContainer>
      <Styled.DetailsContainer>
        {photoSections?.map((section, index) =>
          renderSection(section, index, data.title, isMobile),
        )}
        {otherSections?.map((section, index) =>
          renderSection(section, index + 100, data.title, isMobile),
        )}
      </Styled.DetailsContainer>
    </Styled.CardsContainer>
  );
};
