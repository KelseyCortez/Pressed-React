import React, { Component } from 'react';
import { db } from './firebase';
import ReactMarkdown from 'react-markdown';
import Home from './Home';

export default class Articles extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: [],
             
        }
    }

    componentDidMount() {
        db.collection('articles').get()
        .then((querySnapshot) => {
            let newArticles = [];
            querySnapshot.forEach(doc => {
                newArticles.push(doc.data());

            })
            this.setState({
                articles : newArticles
            })
        })
    }
    

    render() {
        return (
            <div>
                <Home/>
                {this.state.articles.map(article => {
                    return <div>
                        {article.title}
                        <ReactMarkdown source={article.content}/>
                        </div>
                })}
            </div>
        )
    }
}
