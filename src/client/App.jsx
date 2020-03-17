import React, { useState } from 'react';


const App = ({ host }) => {
  const initTestState = 'init test state';
  // eslint-disable-next-line no-unused-vars
  const [testState, setTestState] = useState(initTestState);

  return (
    <div className="App" aria-label="app">
      nickzylstra.com with CICD pipeline deploy
      <br />
      {`this React app expects to be running on ${host}`}
    </div>
  );
};

export default App;
