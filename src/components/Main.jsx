import React from 'react';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'></div>
      <div>
        <h1>I'm John Adams</h1>
      </div>
    </div>
  );
};

export default Main;
