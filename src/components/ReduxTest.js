import React from "react";
import {Button} from "antd";
import {connect} from "react-redux";
import {add, asyncAdd, minus} from "../store/module/count";

const mapStateToProps = state => ({num: state.counter});
const mapDispatchToProps = {
    add,
    minus,
    asyncAdd
};

function ReduxTest({add, minus, num, asyncAdd}){
    return (
        <div>
            <Button onClick={minus}>-</Button>
            <p>{num}</p>
            <Button onClick={add}>+</Button>
            <Button onClick={asyncAdd}>asyncAdd</Button>
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
