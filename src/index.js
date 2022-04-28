import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);
//   return(
//     <li>{children} está {estado}</li>
//   )
// }

// const X = () =>
//   <ul>
//     <Li estado={'feliz'} casa={true} edad={34}>Sergio</Li>
//     <Li estado={'triste'} casa={true} edad={34}>Sergio</Li>
//     <Li estado={'iracundo'} casa={true} edad={34}>Sergio</Li>
//   </ul>

ReactDOM.render(
  <App />, (document.getElementById('root'))
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
