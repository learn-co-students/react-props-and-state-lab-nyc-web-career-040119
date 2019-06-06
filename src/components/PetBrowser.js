import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        <Pet
          petState={this.props.petState}
          onAdoptPet={this.props.onAdoptPet}
        />
      </div>
    )
  }
}

export default PetBrowser
