import React, { Component } from 'react';
import { db } from './firebase';
import ReactMarkdown from 'react-markdown';
import Home from './Home';
import { Card, Button, Container } from 'react-bootstrap';

export default class Articles extends Component {
    constructor() {
        super()

        this.state = {
            articles: [],

        }
    }

    componentDidMount() {
        // const actualContent = content.html();
        db.collection('articles').get()
            .then((querySnapshot) => {
                let newArticles = [];
                querySnapshot.forEach(doc => {
                    // console.log(doc.data().content);
                    let articleString = doc.data().content.replace(/\\n/g, '<br><br />') 
                    articleString = articleString.replace(/\\/g, " ")
                    console.log(articleString);
                    const newObj = {...doc.data(), content: articleString}
                    newArticles.push(newObj);

                })
                this.setState({
                    articles: newArticles
                })
            })
    }


    render() {
        return (
            <div>
                <Home />
                {this.state.articles.map(article => {
                    return <div>
                        <Container >
                        <Card className= "bg-dark text-white" >
                            <Card.Header as="h5">{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text dangerouslySetInnerHTML={{__html: article.content}}/>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>

                        </Card>
                        </Container>
                    </div>
                })}
            </div>
        )
    }
}
