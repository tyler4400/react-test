import React, { Component } from "react";

export default class CartDemo extends Component{
    constructor(props){
        super(props);

        this.state = {
            goods: [
                {id: 1, text: 'web全栈架构工程师'},
                {id: 2, text: 'python全栈架构工程师'}
            ],
            text: '',
            Cart: []
        }
    }
    textChange = e => {
        this.setState({
            text: e.target.value
        })
    };
    addGood = () => {
        this.setState(prevState => {
            return {
                goods:[
                    ...prevState.goods,
                    {
                        id: prevState.goods.length + 1,
                        text: prevState.text
                    }
                ],
                text: ''
            }
        })
    };

    addToCart = good => {
        const newCart = [...this.state.Cart];
        const index = newCart.findIndex(cart => cart.id === good.id);
        const cart = newCart[index];
        if(cart){
            newCart.splice(index, 1, {...cart, count: cart.count + 1})
        } else {
            newCart.push({...good, count: 1})
        }

        this.setState({
            Cart: newCart
        })
    };

    minus = cart => {
        const newCarts = [...this.state.Cart];
        const index = newCarts.findIndex(c => c.id === cart.id);
        if(newCarts[index].count > 1){
            newCarts.splice(index, 1, {...cart, count: cart.count - 1})
        } else {
            newCarts.splice(index, 1)
        }

        this.setState({
            Cart: newCarts
        })
    };

    plus = cart => {
        const newCarts = [...this.state.Cart];
        const index = newCarts.findIndex(c => c.id === cart.id);
        if(cart){
            newCarts.splice(index, 1, {...cart, count: cart.count + 1})
        }

        this.setState({
            Cart: newCarts
        })
    };
    render(){
        return(
            <div>
                {/* 条件渲染 */}
                {this.props.title && <h1>{this.props.title}</h1>}

                {/* 添加商品 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/>
                    <button onClick={this.addGood}>添加商品</button>
                </div>

                {/* 列表渲染 */}
                <ul>
                    {this.state.goods.map(good => (
                        <li key={good.id}>
                            {good.text}
                            <button onClick={() => this.addToCart(good)}>加购</button>
                        </li>
                    ))}
                </ul>

                {/* 购物车 */}
                <p>购物车</p>
                <Cart data={this.state.Cart} minus={this.minus} plus={this.plus}/>
            </div>
        )
    }
}

function Cart(props){
    return (
        <table>
            <tbody>
            {props.data.map(cart => (
                <tr key={cart.id}>
                    <td>{cart.text}</td>
                    <td>
                        <button onClick={() => props.minus(cart)}>-</button>
                        {cart.count}
                        <button onClick={() => props.plus(cart)}>+</button>

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
