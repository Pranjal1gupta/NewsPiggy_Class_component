import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3' >
        <img src={loading} alt="loading...." style={{height:"80px",width:"80px"}}/>
      </div>
    )
  }
}

export default Spinner
