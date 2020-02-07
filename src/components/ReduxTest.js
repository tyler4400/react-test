import React from "react";
// import store from "../Store";
import {Button} from "antd";
import { connect } from "react-redux";

const mapStateToProps =state => ({num: state});
const mapDispatchToProps = {
    add: () => ({type: 'add'}),
    minus: () => ({type: 'minus'})
};

function ReduxTest({add, minus, num}){
    return (
        <div>
            <Button onClick={minus}>-</Button>
            <p>{num}</p>
            <Button onClick={add}>+</Button>
        </div>

    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest);

/* 装饰器语法， */
// @connect(
//     mapStateToProps,
//     mapDispatchToProps
// )
// class ReduxTest extends React.Component {
//     render() {
//         const { num, minus, add, asyncAdd } = this.props;
//         return (
//             <div>
//                 <p>{num}</p>
//                 <div>
//                     <button onClick={minus}>-</button>
//                     <button onClick={add}>+</button>
//                     <button onClick={asyncAdd}>AsyncAdd</button>
//                 </div>
//             </div>
//         );
//     }
// }
// export default ReduxTest;
