import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';

const MainPage = lazy(() => import(/* webpackChunkName: "main-page" */ './pages/main-page'));

const PageWithoutLodash = lazy(() =>
  import(/* webpackChunkName: "page-without-lodash" */ './pages/page-without-lodash')
);
const PageWithDayJS = lazy(() =>
  import(/* webpackChunkName: "page-with-dayjs" */ './pages/page-with-dayjs')
);

const PageWithSelect = lazy(() =>
  import(/* webpackChunkName: "page-with-select" */ './pages/page-with-select')
);

export default function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/webpack-optimization-post/">
        <a  href="https://github.com/romenkova/webpack-optimization-post">GitHub Repo</a>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={MainPage} />
          <Route path="/select" component={PageWithSelect} />
          <Route path="/dayjs" component={PageWithDayJS} />
          <Route path="/lodash" component={PageWithoutLodash} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
