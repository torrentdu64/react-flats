import React , { Component} from 'react';

import Flat from './flat';

class FlatList extends Component {

  render(){

    return this.props.flats.map ( flat => {
      return ( <Flat name={flat.name}
                     price={flat.price}
                     priceCurrency={flat.priceCurrency}
                     imageUrl={flat.imageUrl}
                     key={flat.name} /> )
    })

  }
}

export default FlatList;
