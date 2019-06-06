import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        <Pet
          petState={this.props.petState}
          adoptPet={this.props.adoptPet}
        />
      </div>
    )
  }
}

export default PetBrowser
