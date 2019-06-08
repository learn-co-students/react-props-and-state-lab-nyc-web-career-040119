import React from 'react'

class Pet extends React.Component {
  // displayPets = () => {
  //   this.state.pets.map((species) => {
  //     return species.name
  //   })
  // }


  render() {
    const petGender = this.props.pet.gender == "male" ? '♂' : '♀'

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {petGender}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            className="ui primary button">
            Adopt pet
          </button>
        )}
        </div>
      </div>
    )
  }
}

export default Pet
