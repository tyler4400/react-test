import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import CartDemo from "./components/CartDemo";
import Calculator from "./components/Calculator";
import AntdTest from "./components/AntdTest";
import CommentList from "./components/CommentList";
import Hoc from "./components/Hoc";
import {FetcherUser, RadioGroupTest, WelcomeDialog} from "./components/Composition";
import HookTest from "./components/HookTest";
import ContextText from "./components/Context";
import WrappedNormalLoginForm from "./components/AntdForm";
import MyForm from "./components/MyFrom";
import ReduxTest from "./components/ReduxTest";
import { Provider } from "react-redux";
import store from "./store";

function App(){
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

    function formatName(user){
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
            {/*<h1>{formatName(user)}</h1>*/}
            {/*{greeting(user)}*/}
            {/* 属性 */}
            <img src={logo} style={{width: '100px'}} alt=""/>
            {jsx}
            {/*<Welcome1 name='tom'/>*/}
            {/*<Welcome2 name='jerry'/>*/}
            <Clock name='hey, '/>
            <CartDemo title='课程商品'/>
            {/*<Lifecycle/>*/}
            <Calculator/>

            <h1>ant-design</h1>
            <AntdTest/>

            <CommentList/>

            <h1>HOC</h1>
            <Hoc/>
            <WelcomeDialog color="green"/>

            <FetcherUser/>
            <RadioGroupTest/>

            <h1>Hook</h1>
            <HookTest/>

            <h1>Context</h1>
            <ContextText/>

            <h1>antd表单的使用</h1>
            <WrappedNormalLoginForm/>

            <h1>仿写antd表单</h1>
            <MyForm/>

            <h1>Redux的学习</h1>
            <Provider store={store}>
                <ReduxTest/>
            </Provider>
        </div>
    )
}

export default App;
