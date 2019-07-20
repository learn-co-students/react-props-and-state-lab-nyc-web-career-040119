import React from 'react'

export default class Pet extends React.Component {

  state = {
    adopted: this.props.pet.isAdopted
  }

  onAdoptPet = petId => {
    this.props.onAdoptPet(petId)
    this.setState({
      adopted: true
    })
  }

  render() {
    console.log(this.state.adopted);
    const { pet } = this.props
    return (
      pet ?
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === 'female' ? `♀ ${pet.name}` : `♂ ${pet.name}`}
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
          {this.state.adopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={(e)=> this.onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
      : null
    )
  }
}

// Works but not what the tests want
// <button onClick={(e) => onAdoptPet(pet.id)} className={`ui button ${pet.isAdopted ? 'disabled' : 'primary'}`}>{pet.isAdopted ? 'Already adopted' : 'Adopt Pet'}</button>
