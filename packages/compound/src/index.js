import React  from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
