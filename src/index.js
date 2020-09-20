import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import moment from 'moment';
import lodash from 'lodash';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import './index.css';

function Navigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link to="/">main</Link>
      </li>
      <li className="nav__item">
        <Link to="/select">select</Link>
      </li>
      <li className="nav__item">
        <Link to="/moment">moment</Link>
      </li>
      <li className="nav__item">
        <Link to="/lodash">lodash</Link>
      </li>
    </ul>
  );
}

function App() {
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

function MainPage() {
  return (
    <>
      <h1>
        I am the Main Page{' '}
        <span role="img" aria-label="hello emoji">
          👋
        </span>
      </h1>
      <p>
        I do not have any complicated elements, <br />
        but people come here in the first place
      </p>
    </>
  );
}

function PageWithSelect() {
  return (
    <>
      <h1>
        I am super useful page with a select element{' '}
        <span role="img" aria-label="magic emoji">
          ✨
        </span>
      </h1>
      <Select
        placeholder="Cats or dogs?"
        options={[
          { label: 'cats', value: 1 },
          { label: 'dogs', value: 2 },
          { label: 'horses', value: 2 }
        ]}
      />
    </>
  );
}

function PageWithMoment() {
  return (
    <>
      <h1>
        I am page with the moment.js{' '}
        <span role="img" aria-label="clock emoji">
          ⏱️
        </span>
      </h1>
      <p>I need all of your memory</p>
      <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    </>
  );
}

function PageWithLodash() {
  return (
    <>
      <h1>I am page with the lodash</h1>
      <div>
        {lodash.map(
          [
            { id: 'pig', value: '🐷' },
            { id: 'dog', value: '🐶' },
            { id: 'cat', value: '🐱' }
          ],
          ({ id, value }) => (
            <p key={id}>I like {value}</p>
          )
        )}
        <p>I could be replaced by the plain js</p>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
