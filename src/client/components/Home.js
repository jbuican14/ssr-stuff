import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home Components</div>
      <button
        onClick={() => {
          console.log('Hi there!');
        }}
      >
        {' '}
        Press me
      </button>
    </div>
  );
};

export default Home;
