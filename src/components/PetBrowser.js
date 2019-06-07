import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // thePets = ()=>{
  //   this.props.pets.map((pet)=>{
  //     return <Pet key={pet.id} pet = {pet} onAdoptPet={this.props.onAdoptPet}/>
  //   })
  // }
  render() {
    // console.log(this.thePets)
    //
    const thePets = this.props.pets.map((pet)=>{
      return <Pet key={pet.id} pet = {pet} onAdoptPet={this.props.onAdoptPet}/>
    })

    return(
      <div className="ui cards">
      {thePets}
      </div>
    )

  }
}

export default PetBrowser
