import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1, Welcome2 } from "./components/CompType";
import Clock from "./components/Clock";
import CartDemo from "./components/CartDemo";
import Lifecycle from "./components/Lifecycle";
import Calculator from "./components/Calculator";

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
        firstName: '赵四',
        lastName: '尼古拉斯'
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
        <div className='container' style={{padding: '0 20px'}}>
            {/* 表达式 */}
            <h1>{formatName(user)}</h1>
            {greeting(user)}
            {/* 属性 */}
            <img src={logo} style={{width: '100px'}} alt=""/>
            {jsx}
            <Welcome1 name='tom'/>
            <Welcome2 name='jerry'/>
            <Clock name='hey, '/>
            <CartDemo title='课程商品'/>
            <Lifecycle/>
            <Calculator/>
        </div>
    )
}

export default App;
