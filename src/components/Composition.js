import React from "react";

function Dialog(props){
    return(
        <div style={{border: `4px solid ${props.color || "blue"}`}}>
            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}

export function WelcomeDialog(props){
    function handleClick(){
        alert('好的');
    }

    const footer = <button onClick={handleClick}>确定</button>;
    return(
        <Dialog {...props} footer={footer}>
            <p>上课了</p>
        </Dialog>
    )
}
const Api = {
    getUser() {
        return { name: "jerry", age: 20 };
    }
};
function Fetcher(props) {
    const user = Api[props.name]();
    return props.children(user);
}

export function FetcherUser() {
    return (
        <Fetcher name="getUser">
            {({ name, age }) => (
                <p>
                    {name}-{age}
                </p>
            )}
        </Fetcher>
    );
}

function Radio({children, ...rest}) {
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    );
}
// 修改children
function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                //   vdom不可更改，克隆一个新的去改才行
                return React.cloneElement(child, { name: props.name });
            })}
        </div>
    );
}
export function RadioGroupTest() {
    return (
        <RadioGroup name="mvvm">
            <Radio value="vue">vue</Radio>
            <Radio value="react">react</Radio>
            <Radio value="react">angular</Radio>
        </RadioGroup>
    );
}
