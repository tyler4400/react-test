import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

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
                        <Link to="/about">我的</Link>
                    </li>
                    <li>
                        <Link to="/adafawgawawhgeg">404</Link>
                    </li>
                </ul>
                {/* 路由即是组件 */}
                <div style={{border: "5px solid #eee"}}>
                    <Switch> {/* Switch表示只会匹配其中一个，和radio一样 */}
                        <Route path="/" exact component={Home}/> {/* exact 即精确匹配 */}
                        <Route path="/about" component={About}/>
                        <Route path="/detail/:course" component={Detail}/>{/* 动态路由 */}
                        <Route component={NoMatch}/>{/* 没有匹配到其它路由时 */}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

function About(){
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
