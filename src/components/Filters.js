import React from 'react'

export default class Filters extends React.Component {

  handleChange = (e) => {
    // console.log(e.target.value)
    this.props.onChangeType(e)
  }

  handleClick = (e) => {
    this.props.onFindPetsClick(e)
  }

  render() {
    // console.log('Filters Props:', this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            onChange={this.handleChange}>
            <option value="all"> All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={this.handleClick}>
            Find pets
          </button>
        </div>
      </div>
    )
  }
}
