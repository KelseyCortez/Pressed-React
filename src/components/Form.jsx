import React, { Component } from 'react'
import { db } from './firebase';

export default class Form extends Component {
    state = {
        title: '',
        content: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        db.collection('articles').add({ 
            title: this.state.title,
            content: JSON.stringify(this.state.content),
        });


    }
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='title' value={this.state.title} onChange={this.handleChange}/>
                    <textarea name='content' value={this.state.content} onChange={this.handleChange}/>
                    <button type='submit'>Submit</button>



                </form>
            </div>
        )
    }
}
