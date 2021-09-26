import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const HomeRepos = lazy(() => import('./Home/HomeRepos/HomeRepos'));
const Repo = lazy(() => import('./Repo/Repo'));

export { Home, HomeRepos, Repo };
