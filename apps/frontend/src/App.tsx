import React, { useState } from 'react';
import { InitialPrompt } from './components/InitialPrompt';
import { Workspace } from './components/workspace/Workspace';

function App() {
  const [hasInitialPrompt, setHasInitialPrompt] = useState(false);

  const handleInitialPrompt = (prompt: string) => {
    console.log('Initial prompt:', prompt);
    setHasInitialPrompt(true);
  };

  const handleNewPrompt = (prompt: string) => {
    console.log('New prompt:', prompt);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {!hasInitialPrompt ? (
        <InitialPrompt onSubmit={handleInitialPrompt} />
      ) : (
        <Workspace onNewPrompt={handleNewPrompt} />
      )}
    </div>
  );
}

export default App;