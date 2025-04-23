import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/aboutUs/aboutUs'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// to create a new page, just add another array element of format: { path: "/route", element: <Component />}.
// lmk if you have questions - ram
const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/about", element: <About />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
