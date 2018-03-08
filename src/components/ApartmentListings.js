import React, { Component } from 'react';

import Modal from './Modal';
import data from '../listings.json';

class ApartmentListings extends Component {
  constructor() {
    super()

    this.state = {
      listings: data,
      viewerModal: false,
      listingDetails: {}
    }
  }

  handleClick(l) {
    this.setState({viewerModal: true, listingDetails: l})
  }

  handleClose() {
    this.setState({viewerModal: false, listingDetails: {}})
  }

  render() {
    return(
      <div className="apt-listing">
        <ul>
          {
            this.state.listings.map((listings, key) => {
              return <li key={key} onClick={()=>{this.handleClick(listings)}}>{listings.address.street}, {listings.address.city}, {listings.address.state}</li>
            })
          }
        </ul>

        <Modal show={this.state.viewerModal}
               details={this.state.listingDetails}
               close={this.handleClose.bind(this)} />
      </div>
    )
  }
}

export default ApartmentListings;
