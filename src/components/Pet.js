import React from 'react'

class Pet extends React.Component {
  handleClick = (event) => {
    this.props.onAdoptPet(event)
  }
  petCard = this.props.petState.map(pet => {
    return <div className="card" key={pet.id}>
      <div className="content">
        <a className="header">
          {pet.gender === 'female' ? '♀' : '♂'}
          {pet.name}
        </a>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {
          pet.isAdopted ?
          <button
            data-id={pet.id}
            data-age={pet.age}
            data-gender={pet.gender}
            data-name={pet.name}
            data-type={pet.type}
            data-weight={pet.weight}
            data-isadopted={pet.isAdopted}
            className="ui disabled button"
            onClick={this.handleClick}
            >
            Already adopted
          </button>
          :
          <button
            data-id={pet.id}
            data-age={pet.age}
            data-gender={pet.gender}
            data-name={pet.name}
            data-type={pet.type}
            data-weight={pet.weight}
            data-isadopted={pet.isAdopted}
            className="ui primary button"
            onClick={this.handleClick}
            >
            Adopt pet
          </button>
        }
      </div>
    </div>
  })
  render() {
    console.log("Pet state: ", this.props.petState)
    return (
      <div>
        {this.petCard}
      </div>
    )
  }
}

export default Pet
