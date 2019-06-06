import React from 'react'

class Pet extends React.Component {
  handleClick = (event) => {
    this.props.onAdoptPet(event)
  }

  // petCard = this.props.petState.map(pet => {
  //   return
  // })
  render() {
    // console.log("Pet state: ", this.props.petState)
    return (
      <div className="card" key={this.props.pet.id}>
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
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
          {
            this.props.pet.isAdopted ?
            <button
              data-id={this.props.pet.id}
              data-age={this.props.pet.age}
              data-gender={this.props.pet.gender}
              data-name={this.props.pet.name}
              data-type={this.props.pet.type}
              data-weight={this.props.pet.weight}
              data-isadopted={this.props.pet.isAdopted}
              className="ui disabled button"
              onClick={this.handleClick}
              >
              Already adopted
            </button>
            :
            <button
              data-id={this.props.pet.id}
              data-age={this.props.pet.age}
              data-gender={this.props.pet.gender}
              data-name={this.props.pet.name}
              data-type={this.props.pet.type}
              data-weight={this.props.pet.weight}
              data-isadopted={this.props.pet.isAdopted}
              className="ui primary button"
              onClick={this.handleClick}
              >
              Adopt pet
            </button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
