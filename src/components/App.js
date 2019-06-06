import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      currentPet: {}
    }
  }

  // HELPER METHODS
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  } // end onChangeType

  onFindPetsClick = (event) => {
    const PET_URL = '/api/pets'
    switch (this.state.filters.type){
      case ('all'):
        fetch(PET_URL)
          .then(response => response.json())
          .then(pets => {
            this.setState({
              pets: [...pets]
            })
          })
        break
      default:
        fetch(PET_URL + `?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(pets => {
          this.setState({
            pets: [...pets]
          })
        })
        break
    } // end switch
  } // end onFindPetsClick
  onAdoptPet = (event) => {
    this.setState({
      currentPet: {
        id: event.target.dataset.id,
        age: event.target.dataset.age,
        gender: event.target.dataset.gender,
        name: event.target.dataset.name,
        type: event.target.dataset.type,
        weight: event.target.dataset.weight,
        isAdopted: event.target.dataset.isAdopted
      }
    }, () => console.log(this.state.currentPet))

    const currentPetIndex = this.state.pets.findIndex(pet => {
      return pet.id === event.target.dataset.id
    })
    // const petsCopy = [...this.state.pets]
    // this.setState({
    //   pets: {
    //     ...petsCopy,
    //     petsCopy[currentPetIndex]: {
    //       ...petsCopy[currentPetIndex],
    //       isAdopted: !petsCopy[currentPetIndex].isAdopted
    //     }
    //   }
    // })
  }
  // end HELPER METHODS

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                petState={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
