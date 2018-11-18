import React, { Component } from 'react'
import Bar from '../components/Bar'
import Editor from '../components/Editor'

class Home extends Component {
  render(){
    return(
      <div style={{display:"flex"}} className='main'>
        <Bar />
        <Editor />
      </div>
    )
  }
}

export default Home