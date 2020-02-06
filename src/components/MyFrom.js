/**
 * 仿照antd的表单组件，自己实现一个类似其功能的组件
 */

import React from "react";
import {Button, Input} from "antd";
import AsyncValidator from 'async-validator';

/* 创建一个高阶组件。功能包含： 事件处理、数据收集、校验 */
function MyFromCreate(Comp){
    return class extends React.Component {
        constructor(props){
            super(props);

            this.state = {};
            this.options = {};
        }

        handleChange = e => {
            const {name, value} = e.target;
            console.log(name, value);
            this.setState({[name]: value}, () => {
                this.validateField(name);
            });
        };
        validateField = field => {
            const descriptor = {[field]: this.options[field].rules};
            const validator = new AsyncValidator(descriptor);
            return validator.validate({[field]: this.state[field]}, errors => {
                if (errors) {
                    this.setState({
                        [field + "Message"]: errors[0].message
                    });
                } else {
                    this.setState({
                        [field + "Message"]: ''
                    });
                }
            })
        };

        validateFields = () => {
            return Promise.all( Object.keys(this.options).map(field => this.validateField(field)));
        };
        // 创建input包装器
        getFieldDec = (name, option) => {
            this.options[name] = option;
            return inputComp => (
                <div>
                    {React.cloneElement(inputComp, {
                        name: name,
                        value: this.state[name] || '',
                        onChange: this.handleChange
                    })}
                    {this.state[name + 'Message'] && (
                        <p style={{color: 'red'}}>{this.state[name + 'Message']}</p>
                    )}
                </div>
            )
        };

        render(){
            return (
                <Comp getFieldDec={this.getFieldDec} validateFields={this.validateFields}/>
            )
        }
    }
}


class MyForm extends React.Component {
    onSubmit = () =>{
        this.props.validateFields().then(res => {
            console.log('校验通过');
            console.log(res);
        }).catch(res => {
            console.error('校验失败');
            console.log(res);
        });
    };
    render(){
        const {getFieldDec} = this.props;
        return (
            <div>
                {getFieldDec('UserName', {
                    rules: [{required: true, message: "请输入姓名"}
                        , {min: 6, max: 10, message: '请输入6~10的用户名'}]
                })(<Input placeholder="输入用户木"/>)}
                {getFieldDec('Password', {rules: [{required: true, message: "请输入密码"}]})
                (<Input placeholder="输入密码" type="password"/>)}

                <Button onClick={this.onSubmit}>提交</Button>
            </div>
        )
    }
}

const WrappedMyFrom = MyFromCreate(MyForm);
export default WrappedMyFrom;
