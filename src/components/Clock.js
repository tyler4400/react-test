import React, {Component} from "react";

export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state.date = new Date();
    }
    // state名称固定叫这个
    state = {
        date: null
    };
    componentDidMount(){
        this.timer = setInterval( () => {
            this.setState({ // 固定叫这个，来改变state
                date: new Date()
            })
        //    this.state.comment = 'Hello'; 不能直接修改state，此代码不会重新渲染组件

            // 2.批量执行
            // this.setState(obj, cb)
            // this.setState(fn, cb)
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                {this.props.name}
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
