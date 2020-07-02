import React, { Component } from 'react'
import { API_KEY, API_ID } from '../config.js';
import CharityCard from './CharityCard';


export default class CharityNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            charity: [],
        }
    }
    componentDidMount() {
        fetch(`https://api.data.charitynavigator.org/v2/organizations/?app_id=${API_ID}&app_key=${API_KEY}&rated=1&categoryName='Civil Rights'`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    charity: data
                })

            })

    }

    render() {
        return (
            <div>
                {this.state.charity.map((charity, index) => {
                    return (
                        <CharityCard charity={charity} key={index} />
                    )

                })}
        
            </div>
        )
    }
}
