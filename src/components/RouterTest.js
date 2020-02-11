import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../store/module/user";
import {Button} from "antd";

export default function RouterTest(){
    return (
        <Router>
            <div>
                {/* 导航链接 */}
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to={{pathname: '/about', state: {name: '张三'}}}>我的</Link>{/* to也可以是个object */}
                    </li>
                    <li>
                        <Link to="/adafawgawawhgeg">404</Link>
                    </li>
                </ul>
                {/* 路由即是组件 */}
                <div style={{border: "5px solid #eee"}}>
                    <Switch> {/* Switch表示只会匹配其中一个，和radio一样 */}
                        <Route path="/" exact component={Home}/> {/* exact 即精确匹配 */}
                        <PrivateRoute path="/about" component={About}/>{/* 用高阶组件当做路由守卫 */}
                        <Route path="/login" component={Login}/>
                        <Route path="/detail/:course" component={Detail}/>{/* 动态路由 */}
                        <Route component={NoMatch}/>{/* 没有匹配到其它路由时 */}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

function About(props){
    console.log(props);
    return (
        <div>
            <h3>个人中心</h3>
            <ul>
                <li>
                    <Link to="/about/me">个人信息</Link>
                </li>
                <li>
                    <Link to="/about/order">订单查询</Link>
                </li>
            </ul>
            {/* 嵌套路由 */}
            <div style={{border: "5px solid #aaa"}}>
                <Switch>
                    <Route path="/about/me" component={() => <div>Me</div>}/> {/* 也可以是动态组件 */}
                    <Route path="/about/order" component={() => <div>order</div>}/>
                    <Redirect to="/about/me"/>
                </Switch>
            </div>
        </div>
    )
}

function Home(){
    return (
        <div>
            <h3>课程列表</h3>
            <ul>
                <li>
                    <Link to="/detail/web">Web架构师</Link>
                </li>
                <li>
                    <Link to="/detail/python">Python架构师</Link>
                </li>
            </ul>
        </div>
    )
}

// 传递进来的不是一般的props，是路由器对象
function Detail(props){
    // 1.history: 导航指令
    // 2.match: 获取参数信息
    // 3.location: 当前url信息
    console.log(props);

    return (
        <div>
            当前课程：{props.match.params.course}
            <button onClick={props.history.goBack}>后退</button>
        </div>
    );
}

function NoMatch(route){
    return (
        <div>404 没有找到相关路由：{route.location.pathname}</div>
    )
}

const mapStateToProps = state => ({isLogin: state.user.isLogin});
const mapDispatchToProps = {login};
// 希望用法：<PrivateRoute component={About} path="/about" ...>
const PrivateRoute = connect(mapStateToProps)(({component: Comp, isLogin, ...rest}) => (
        <Route {...rest} render={props => isLogin ? <Comp {...rest}/> : ( // 视频中rest是给到了Route组件，但是要给到Comp才能打印location
            <Redirect to={{pathname: '/login', state: {redirect: props.location.pathname}}}/>
        )}/>
    )
);

const Login = connect(
    state => ({isLogin: state.user.isLogin, logging: state.user.logging}),
    {login}
)(function ({location, isLogin, logging, login}){
        const redirect = location.state.redirect || '/';
        if (isLogin) {
            return <Redirect to={redirect}/>
        } else {
            return (
                <div>
                    <p>您还没有登录</p>
                    <Button onClick={login} disabled={logging} loading={logging}>登录</Button>
                </div>
            )
        }
    }
);

