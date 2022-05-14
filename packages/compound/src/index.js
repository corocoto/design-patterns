import React  from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import './index.css';

// Components
import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
