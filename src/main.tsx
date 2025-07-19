import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// createRoot(document.getElementById("root")!).render(<App />);

import { BrowserRouter } from 'react-router-dom';

const basePath = import.meta.env.BASE_URL; // Vite injects this automatically

createRoot(document.getElementById('root')!)
  .render(
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  );


