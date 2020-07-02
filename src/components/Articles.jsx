import React, { Component } from 'react';
import { db } from './firebase';
import { Card, Container, Accordion } from 'react-bootstrap';

export default class Articles extends Component {
    constructor() {
        super()

        this.state = {
            articles: [],

        }
    }
    //gets all articles from firebase db
    componentDidMount() {
        db.collection('articles').get()
            .then((querySnapshot) => {
                let newArticles = [];
                querySnapshot.forEach(doc => {
                    //using regex for formatting the string from the database
                    let articleString = doc.data().content.replace(/\\n/g, '<br><br />')
                    articleString = articleString.replace(/\\/g, " ")
                    const newObj = { ...doc.data(), content: articleString }
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
                {this.state.articles.map((article, index) => {
                    return (
                        <Container key={index} >
                            <Accordion>
                                <Card className="bg-dark text-white">
                                    <Accordion.Toggle as={Card.Header} eventKey="0">{article.title}</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><Card.Text dangerouslySetInnerHTML={{ __html: article.content }} /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Container>
                    )

                })}
            </div>
        )
    }
}
