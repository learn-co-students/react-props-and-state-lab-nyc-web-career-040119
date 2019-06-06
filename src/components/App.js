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
      }
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
  adoptPet = (event) => {
    const currentPetIndex = this.state.pets.findIndex(pet => {
      return pet.id === event.target.id
    })
    this.setState({

    })
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
                adoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
