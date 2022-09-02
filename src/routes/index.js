import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import { UploadLayout } from '~/components/Layout';
import Search from '~/pages/Search/Search';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: UploadLayout },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
