import styled from 'styled-components';

const HighlightWrapper = styled.div`
  position: relative;
  background-color: var(--color-accent);
  color: white;
  max-width: 1000px;
`;

const DecorBefore = styled.div`
  height: 125px;
  width: 1000px;
  background-image: url('/decorElemenBefore.svg');
  background-repeat: repeat;
  background-position: center -44px;
  background-size: 550px;
  overflow: hidden;
`;

const DecorAfter = styled.div`
  height: 130px;
  width: 1000px;
  margin-bottom: 30px;
  background-image: url('/decorElemenAfter.svg');
  background-repeat: repeat;
  background-position: center -3px;
  background-size: 550px;
  overflow: hidden;
`;

export const Styled = {
  HighlightWrapper,
  DecorBefore,
  DecorAfter,
};
