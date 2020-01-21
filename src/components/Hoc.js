import React from "react";
function Plan(props){
    return(
        <div>{props.stag}-{props.name}</div>
    )
}

const MyPlan = Comp => {
    // 获取name,name可能来自于接口或其他手段
    // return props => (
    //     <Comp name="第二课" {...props} />
    // )
    const name='第二课';
    return class extends React.Component{
        componentDidMount(){
            console.log('componentDidMount');
        }
        render(){
            return(
                <Comp {...this.props} name={name}/>
            )
        }

    }

};

const NewPlan = MyPlan(Plan);

export default class Hoc extends React.Component {
    render(){
        return(
            <NewPlan stag="React"/>
        )
    }

}
