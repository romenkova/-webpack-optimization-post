import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';
import MainPage from './pages/main-page';
import PageWithLodash from './pages/page-with-lodash';
import PageWithMoment from './pages/page-with-moment';
import PageWithSelect from './pages/page-with-select';

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={MainPage} />
        <Route path="/select" component={PageWithSelect} />
        <Route path="/moment" component={PageWithMoment} />
        <Route path="/lodash" component={PageWithLodash} />
      </BrowserRouter>
    </div>
  );
}
