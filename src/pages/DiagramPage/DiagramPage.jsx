import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';

export default function DiagramPage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <NavBalanceCurrency />
    </BackgroundContainer>
  );
}
