import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()
    // SET INITIAL STATE
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  } // END SETTING INITIAL STATE

  // UPDATE THE STATE
  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  } // END UPDATING THE STATE

  // CONDITIONALLY FETCH PET
  onFindPetsClick = (e) => {
    switch(this.state.filters.type){
      case 'all':
        fetch('/api/pets')
          .then(response => response.json())
          .then(pets => {
            console.log('Fetching Selected Pets', pets)
            this.setState({
              pets: [...pets]
            })
          })
        break;
      default:
        fetch(`/api/pets?type=${this.state.filters.type}`)
          .then(response => response.json())
          .then(pets => {
            console.log('Fetching Selected Pets', pets)
            this.setState({
              pets: [...pets]
            })
          })
        break;
    }
  } // END FETCHING PET DATA

  render() {
    console.log('App Current State:', this.state, this.pets)
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
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
