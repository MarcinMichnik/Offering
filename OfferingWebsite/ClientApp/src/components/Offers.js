import React, { Component } from 'react';

export class Offers extends Component {
  static displayName = Offers.name;

  constructor(props) {
    super(props);
    this.state = { offers: [], loading: true };
  }

  componentDidMount() {
      this.populateOfferData();
  }

  static renderOffersTable(offers) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {offers.map(offer =>
            <tr key={offer.id}>
               <td>{offer.id}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Offers.renderOffersTable(this.state.offers);

    return (
      <div>
        <h1 id="tabelLabel" >Offers</h1>
        <p>These are all offers that can be found on this site.</p>
        {contents}
      </div>
    );
  }

  async populateOfferData() {
    const response = await fetch('api/offers');
    const data = await response.json();
    this.setState({ offers: data, loading: false });
  }
}
