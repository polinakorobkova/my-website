import React from 'react';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { data } from 'domain/mock/performances';
import { PerformanceItem } from 'presentation/components/Performance-item/Performance-item';
import { Styled } from './styles';

export const Performances: React.FC = () => {
  return (
    <ContentWrapper position='top' customPadding='0'>
      <Styled.Header>Portfolio</Styled.Header>
      {data.map((item) => (
        <PerformanceItem data={item} key={item.id} />
      ))}
    </ContentWrapper>
  );
};
