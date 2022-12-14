import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorProvider from './components/ColorProvider';
export const ColorContext = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);

