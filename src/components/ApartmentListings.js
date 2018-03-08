import React, { Component } from 'react';
import data from '../listings.json';

class ApartmentListings extends Component {
  constructor() {
    super()

    this.state = {
      listings: data,
      viewerModal: false
    }
  }

  render() {
    return(
      <div className="apt-listing">
        <ul>
          {
            this.state.listings.map((listings, key) => {
              console.log('LISTINGS', listings)
              return <li key={key}>{listings.address.street}, {listings.address.city}, {listings.address.state}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default ApartmentListings;
