import React, { useState } from 'react';


const App = ({ host }) => {
  const initTestState = 'init test state';
  const [testState, setTestState] = useState(initTestState);

  return (
    <div className="App" aria-label="app">
      {`the React app expects to be running on ${host}`}
    </div>
  );
};

export default App;
