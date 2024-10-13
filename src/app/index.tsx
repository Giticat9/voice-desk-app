import React from 'react';
import {createRoot} from 'react-dom/client';

const element = document.getElementById('renderer');
if (!element) {
    throw new Error('Could not render renderer block');
}

const root = createRoot(element);
root.render(<div></div>)
