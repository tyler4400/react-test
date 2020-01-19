import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    function greeting(user){
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }
    const jsx = <h2>i'm a jsp , no ,i mean jsx</h2>;
    return (
        <div className='container'>
            {/* 表达式 */}
            <h1>{formatName(user)}</h1>
            {greeting(user)}
            {/* 属性 */}
            <img src={logo} style={{width: '100px'}} alt=""/>
            {jsx}
        </div>
    )
}

export default App;
