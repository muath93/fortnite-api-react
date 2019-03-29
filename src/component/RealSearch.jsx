import React, { Component } from 'react';

const API_URL_ALL_ITEMS = 'https://fortnite-public-api.theapinetwork.com/prod09/items/list';
// specifikItem = `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${}`
class RealSearch extends Component {
    state = { allItems: [], result: {}, text: '' }

    search() {

        fetch(API_URL_ALL_ITEMS)
            .then(res => res.json())
            .then(data => {
                this.setState({ allItems: data })
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const value = e.target.value;
        console.log(value)
        this.setState({ text: value })
    }

    handleOnSubmit = () => {

        let res = this.state.allItems.filter(item => item.name === '61ea3e9-8438e42-f53d351-e53a5ce')
        console.log(res)
        this.setState({ result: this.state.result })
    }

    render() {

        return (
            <div>
                <lable>Identefaire</lable>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleOnSubmit} >Search</button>
            </div>
        )
    }
}

export default RealSearch;