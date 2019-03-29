import React, { Component } from 'react';
import Search from './component/Search'
import Store from './component/Store'
import RealSearch from './component/RealSearch'

import './App.css';
import 'tachyons'

const API_URL = 'https://fortnite-public-api.theapinetwork.com/prod09/store/get';


class App extends Component {
  state = { items: [] };
  componentDidMount() {

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // let cloneOfItems = this.state.items.slice(0);

        this.setState({ items: data.items })
        // cloneOfItems = data.items.map( item =>  

      })
      .catch(err => console.log(err))
  }

  // getItmes = (items) => {

  // }
  getCost = (item) => {
    console.log(item);

    console.log(item.item.images.background);
  }

  render() {

    return (

      <div className="App">
        <Search />
        <div className='blue'>
          <Store
            getCost={this.getCost}
            items={this.state.items} />
        </div>
        <RealSearch />
      </div>
    );
  }
}

export default App;
