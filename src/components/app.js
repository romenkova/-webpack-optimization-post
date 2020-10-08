import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';

const MainPage = lazy(() => import(/* webpackChunkName: "main-page" */ './pages/main-page'));
const PageWithLodash = lazy(() =>
  import(/* webpackChunkName: "page-with-lodash" */ './pages/page-with-lodash')
);
const PageWithMoment = lazy(() =>
  import(/* webpackChunkName: "page-with-moment" */ './pages/page-with-moment')
);
const PageWithSelect = lazy(() =>
  import(/* webpackChunkName: "page-with-select" */ './pages/page-with-select')
);

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={MainPage} />
          <Route path="/select" component={PageWithSelect} />
          <Route path="/moment" component={PageWithMoment} />
          <Route path="/lodash" component={PageWithLodash} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
