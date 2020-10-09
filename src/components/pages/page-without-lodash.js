import React from 'react';

export default function PageWithLodash() {
  return (
    <>
      <h1>I am page without the lodash</h1>
      <div>
        {[
          { id: 'pig', value: '🐷' },
          { id: 'dog', value: '🐶' },
          { id: 'cat', value: '🐱' }
        ].map(({ id, value }) => (
          <p key={id}>I like {value}</p>
        ))}
        <p>I have been replaced by the plain js</p>
      </div>
    </>
  );
}
