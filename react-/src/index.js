import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const homepage = () => {
  /*window.location.href = 'https://mmoya064.github.io/final_copy_seg3125_project2/'; // Replace with the correct path to your HTML file*/
  

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <div type = ""></div>
    <div>
      <button type = "button" onClick = {homepage}> RETURN TO HOMEPAGE</button>
    </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
