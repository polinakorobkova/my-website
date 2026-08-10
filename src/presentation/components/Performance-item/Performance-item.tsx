import { Data } from 'domain/mock/performances';
import { PortfolioItem } from '../Portfolio-item/Portfolio-item';

interface Prop {
  data: Data;
}

export const PerformanceItem: React.FC<Prop> = ({ data }) => {
  return <PortfolioItem data={data} />;
};
