import React from 'react';
import { createRoot } from 'react-dom/client';
import WorkshopAvancado from '../Workshop';
const App = () => {
  return (
    <React.StrictMode>
      <WorkshopAvancado />
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;