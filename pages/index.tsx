import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import { GET_COUNTRIES } from '../apollo/queries/CATEGORY';
import MegaMenu from '../components/Megamenu/VerticalMenu';

const Home: NextPage = () => {
  return (
    <div style={{ width: 200 }}>
      <MegaMenu />
    </div>
  );
};

export default Home;
