import 'react';
import './main.css';
import component from './component';

console.log('demo');

if (process.env.NODE_ENV === 'development') {
  console.log('in development');
}

document.body.appendChild(component());
