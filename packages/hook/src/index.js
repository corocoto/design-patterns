import React  from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Input from './components/Input';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Input />);