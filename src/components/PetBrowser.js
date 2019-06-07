import React from 'react'
import Pet from './Pet'

export default class PetBrowser extends React.Component {
  render() {
    console.log('Pet Browser Props:', this.props.pets)

    const pets = this.props.pets.map(pet => {
      return <Pet
        key={pet.id}
        pet={pet}
      />
    })

    return <div className="ui cards">
        {pets}
      </div>
  }
}
