import { Styled } from './styles';
import { SetAbout, SetColloboration, SetCompositions, SetPerformances, SetTexts } from '../Animation/animation.setting';
import { MenuItem } from '../Menu-item/Menu-item';

export const Menu: React.FC<{ isHome?: boolean }> = ({ isHome }) => {

  return (
    <Styled.Container $isHome={isHome}>
      <MenuItem url='about' setting={SetAbout}/>
      <MenuItem url='collaboration' setting={SetColloboration}/>
      <MenuItem url='compositions' setting={SetCompositions}/>
      <MenuItem url='texts' setting={SetTexts}/>
      <MenuItem url='portfolio' setting={SetPerformances}/>
    </Styled.Container>
  );
};