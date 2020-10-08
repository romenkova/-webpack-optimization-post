import React from 'react';
import lodash from 'lodash';

export default function PageWithLodash() {
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
