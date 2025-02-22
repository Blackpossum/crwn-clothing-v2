import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router';
import Jackets from '../../assets/toa-heftiba-ua9ReZlzcIE-unsplash.jpg'
import Mens from '../../assets/adrian-ordonez-P0W27GRvyww-unsplash.jpg'
import Snickers from '../../assets/thandy-yung-9WEq4xcM3_Q-unsplash.jpg';
import Hats from '../../assets/claudio-schwarz-PH8GUKG-Do0-unsplash.jpg'
import Women from '../../assets/priscilla-du-preez-gYdjZzXNWlg-unsplash.jpg'
const HomePage = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": Hats,
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": Jackets,
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": Snickers,
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": Women
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": Mens,
    }
  ]

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default HomePage