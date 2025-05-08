import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './input.css';

console.log('React is starting to mount...');
const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React has mounted!');
}