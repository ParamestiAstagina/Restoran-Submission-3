import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/aboutus';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/aboutus' : AboutUs,
  '/detail/:id': Detail,
};

export default routes;