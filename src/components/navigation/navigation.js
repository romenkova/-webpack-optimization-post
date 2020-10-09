import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export default function Navigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link to="/">main</Link>
      </li>
      <li className="nav__item">
        <Link to="/select">select</Link>
      </li>
      <li className="nav__item">
        <Link to="/dayjs">dayjs</Link>
      </li>
      <li className="nav__item">
        <Link to="/lodash">lodash</Link>
      </li>
    </ul>
  );
}
