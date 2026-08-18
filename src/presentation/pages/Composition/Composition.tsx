import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { CompositionInfo } from 'presentation/components/Composition-info/Composition-info';
import { CompositionSection, data } from 'domain/mock/compositions';
import { Styled } from './styles';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Loader } from 'presentation/components/Loader/Loader';
import { Highlight } from 'presentation/components/Highlight/Highlight';
import { Accent } from 'presentation/components/Accent/Accent';

const renderHighlightedText = (text: string) => {
  // First split by ||...|| for highlight
  const parts = text.split(/\|\|(.+?)\|\|/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <Highlight key={i}>{part}</Highlight>;
    }
    // Then split by **...** for accent (italic + color)
    const accentParts = part.split(/\*\*(.+?)\*\*/g);
    return accentParts.map((accentPart, j) =>
      j % 2 === 1 ? <Accent key={`${i}-${j}`}>{accentPart}</Accent> : accentPart
    );
  });
};

export const CompositionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const compositionData = data.find((item) => item.slug === id);

  const renderSection = (section: CompositionSection, index: number) => {
    switch (section.type) {
      case 'info':
        return compositionData && <CompositionInfo key={index} data={compositionData} />;
      case 'text':
        return (
          <Styled.Paragraph key={index}>
            {section.content ? renderHighlightedText(section.content) : null}
          </Styled.Paragraph>
        );
      case 'text-accent':
        return (
          <Styled.AccentParagraph key={index}>
            {section.content ? renderHighlightedText(section.content) : null}
          </Styled.AccentParagraph>
        );
      case 'quote':
        return <Styled.Quote key={index}>{section.content}</Styled.Quote>;
      case 'testimonial':
        return (
          <Styled.TestimonialWrapper key={index}>
            <Styled.Testimonial>{section.content}</Styled.Testimonial>
            {section.author && (
              <Styled.TestimonialAuthor>— {section.author}</Styled.TestimonialAuthor>
            )}
          </Styled.TestimonialWrapper>
        );
      case 'photo-pair':
        return (
          <Styled.PhotoPair key={index}>
            {section.images?.map((image, imgIndex) => (
              <Styled.PhotoPairItem key={imgIndex} $index={imgIndex}>
                <Styled.Image
                  src={image.src}
                  preview={false}
                  placeholder={<Loader />}
                  alt={compositionData?.name}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.PhotoPairItem>
            ))}
          </Styled.PhotoPair>
        );
      case 'photo-grid':
        return (
          <Styled.PhotoGrid key={index}>
            {section.images?.map((image, imgIndex) => (
              <Styled.PhotoGridItem key={imgIndex} $index={imgIndex}>
                <Styled.Image
                  src={image.src}
                  preview={false}
                  placeholder={<Loader />}
                  alt={compositionData?.name}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </Styled.PhotoGridItem>
            ))}
          </Styled.PhotoGrid>
        );
      case 'photo-wide':
        return (
          <Styled.PhotoWide key={index}>
            {section.images?.map((image, imgIndex) => (
              <div key={imgIndex}>
                <Styled.Image
                  src={image.src}
                  placeholder={<Loader />}
                  alt={compositionData?.name}
                />
                {image.credit && <Styled.CreditText>{image.credit}</Styled.CreditText>}
              </div>
            ))}
          </Styled.PhotoWide>
        );
      case 'video': {
        const isSoundCloud = section.src?.includes('soundcloud.com');
        return (
          <Styled.VideoWrapper key={index}>
            <Styled.Iframe
              src={section.src}
              height={isSoundCloud ? '166' : undefined}
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          </Styled.VideoWrapper>
        );
      }
      case 'video-grid':
        return (
          <Styled.VideoGrid key={index}>
            {section.videos?.map((video, videoIndex) => (
              <Styled.VideoGridItem key={videoIndex}>
                <Styled.Iframe
                  src={video.src}
                  width='100%'
                  height='100%'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
                {video.label && <Styled.CreditText>{video.label}</Styled.CreditText>}
              </Styled.VideoGridItem>
            ))}
          </Styled.VideoGrid>
        );
      // case 'audio':
      //   return (
      //     compositionData && (
      //       <Styled.PlayerContainer key={index}>
      //         <AudioPlayer src={section.src || ''} trackName={compositionData.name} />
      //       </Styled.PlayerContainer>
      //     )
      //   );
      case 'link':
        return (
          <Styled.ExternalLink
            key={index}
            href={section.href || '#'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {section.label || section.content}
          </Styled.ExternalLink>
        );
      default:
        return null;
    }
  };

  return (
    <ContentWrapper position={compositionData?.trackUrl ? 'audio' : 'top'}>
      <NavigateBack link='/compositions' />
      <Styled.Title>{compositionData?.name}</Styled.Title>
      <Styled.HeaderSection>
        {compositionData?.cover && (
          <Styled.CoverImage
            src={compositionData.cover}
            preview={false}
            placeholder={<Loader />}
            alt={compositionData?.name}
          />
        )}
        {compositionData?.sections?.some((s) => s.type === 'info')
          ? compositionData.sections.map((section, index) =>
              section.type === 'info' ? renderSection(section, index) : null,
            )
          : compositionData && <CompositionInfo data={compositionData} />}
      </Styled.HeaderSection>
      {compositionData?.sections?.map((section, index) => {
        if (section.type === 'info') return null;
        return renderSection(section, index);
      })}
      {compositionData?.performed && (
        <Styled.Paragraph>{compositionData.performed}</Styled.Paragraph>
      )}
      {compositionData?.coopName && (
        <Styled.Paragraph>{compositionData.coopName}</Styled.Paragraph>
      )}
    </ContentWrapper>
  );
};
