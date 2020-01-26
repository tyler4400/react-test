import React, {useEffect, useState} from "react";
import {Button} from "antd";

// 自定义hook是一个函数，名称用“use"开头，函数内部可以调用其他钩子
function useAge(){
    const [age, setAge] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setAge(18);
        }, 2000);
    });
    return age;
}

export default function HookTest(){
    const age = useAge();
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [newFruit, setNewFruit] = useState('');
    const [fruits, setFruits] = useState(['apple', 'banana', 'coconut']);

    // 副作用钩子会在每次渲染时都执行
    useEffect(() => {
        document.title = `点击了${count}次`;
    });

    return (
        <div>
            <p>年龄：{age ? age : 'loading...'}</p>
            <p>点击了{count}次</p>
            <Button type="primary" onClick={e => setCount(count + 1)}>点击</Button>

            <p>选择的水果：{fruit}</p>
            <ul>
                {fruits.map(f => <li key={f} onClick={() => setFruit(f)}>{f}</li>)}
            </ul>

            <input type="text" value={newFruit} onChange={e => setNewFruit(e.target.value)}/>
            <Button size="small" color="green" onClick={() => setFruits([...fruits, newFruit])}>新增水果</Button>
        </div>
    )
}
