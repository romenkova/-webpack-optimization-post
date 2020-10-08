import React from 'react';
import Select from 'react-select';

export default function PageWithSelect() {
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
