import GjsEditor from '@grapesjs/react';
import grapesjs from 'grapesjs';

function App() {
  return (
    <GjsEditor
      grapesjs={grapesjs}
      options={{
        canvas: {
          scripts: ['https://cdn.tailwindcss.com'],
        },
      }}
    />
  );
}

export default App;
