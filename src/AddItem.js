import React, { Component } from 'react';



        

export default class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cart: []
        }

        this.addItemToCart = this.addItemToCart.bind(this);
    }

    addItemToCart(name, price, count){
        if(this.state.cart.some(item => item.name === name)){
            this.setState({cart: this.state.cart.map(
                cartItem => {
                    if(cartItem.name === name){
                        cartItem.count += count;
                    }
                    return cartItem;
                })
            });
        }
        else{
            this.setState({cart: [...this.state.cart, {name, price, count}]});
        }
    }

    render(){
        return (
        <div>
            <h2> Products </h2>
            <button onClick={() => this.addItemToCart('apple', 5, 1)}>Add Apple</button>
            <button onClick={() => this.addItemToCart('orange', 10, 1)}>Add orange</button>
            <div>
                <h2>Cart</h2>
                <ul>
                    {this.state.cart.map((item) => {
                        return <li key={item.name + '-' + item.price}>{item.name} {item.count} ${item.price * item.count}</li>
                    })}
                </ul>
            </div>
        </div>
        );
    }
}
  