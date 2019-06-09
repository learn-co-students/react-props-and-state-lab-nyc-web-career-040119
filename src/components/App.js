import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
const API = '/api/pets'

class App extends React.Component {
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     pets: [],
  //     filters: {
  //       type: 'all'
  //     }
  //   }
  // }

  state = {
      pets: [],
      filters: {
        type: 'all'
      }
  }

  // onChangeType event change drop down value
  onChangeType = (e) =>{
    // console.log(e.target.value)
    this.setState({filters: {type: e.target.value}})
  }
// once change the drop down&click Find pets button should get selected details
fetchPets = () =>{
  if(this.state.filters.type === 'all'){
      fetch(API)
      .then(res=>res.json())
      .then(pets=>{
        console.log(pets)
        this.setState({pets})
    })
  }else{
    // console.log(this.state)
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res=>res.json())
    .then(pets=>{
      // console.log(pet)
      this.setState({pets})
    })
  }
}
// callback
onAdoptPet = (id) =>{
 let update = this.state.pets.map(pet=>{return pet.id===id? {...pet, isAdopted:true} : pet })
 this.setState({pets: update}, () => console.log(this.state.pets))
}

  render() {
    // console.log(this.state)
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
               onFindPetsClick={this.fetchPets}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
