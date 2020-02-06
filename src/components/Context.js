import React, {useContext} from "react";

const MyContext = React.createContext();
const {Provider, Consumer} = MyContext;

const context = {theme: 'green'};

function Child(props){
    return(
        <div>
            I have a {props.theme} hat;
        </div>
    )
}
function Child2(){
    const ctx = useContext(MyContext);
    return(
        <div>
            I have a {ctx.theme} hat;
        </div>
    )
}

class Child3 extends React.Component{
    static contextType = MyContext; // contextType是指定的名称
    render(){
        return(
            <div>
                I have a {this.context.theme} hat; {/* this.context是指定的名称 */}
            </div>
        )
    }

}

export default function ContextText(){
    return(
        <div>
            <Provider value={context}>

                {/* 消费方法1 */}
                <Consumer>
                {/* Provider和Consumer之间可以有无数层嵌套 */}
                    { value => <Child {...value}/> }
                </Consumer>

                {/* 消费方法2 */}
                <Child2/>

                {/* 消费方法3 */}
                <Child3/>
            </Provider>
        </div>
    )

}
