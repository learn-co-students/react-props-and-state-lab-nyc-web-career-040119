import React from 'react'

export default class Pet extends React.Component {

  handleClick = () => {
    return this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    console.log('Pet Props:', this.props)

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂  ' : '♀  '}
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
          // render adopt button if the pet is not adopted yet
          // otherwise, render adopt pet button
          // ** currently all the pets are not adopted
          // ** so only "adopt pet" btns are shown
          {this.props.pet.isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button
              className="ui primary button"
              onClick={this.handleClick}>
              Adopt pet
            </button>}


        </div>
      </div>
    )
  }
}
