import React, { Component } from 'react'
import '../assets/scss/Bar/Bar.scss'

class Bar extends Component {
  constructor(){
    super()
    this.state = {
      bar:[
        { id:1, text:"编辑" },
        { id:2, text:"下载" },
        { id:3, text:"PDF" },
        { id:4, text:"教程" },
        { id:5, text:"捐赠" }
      ]
    }
  }

  render(){
    let {bar} = this.state
    
    let sideMenu = bar.map((item)=>{
      return (
        <div key={item.id}>
          <a href="#">{item.text}</a>
        </div>
      )
    })

    return(
      <div style={{height:"100%",backgroundColor:"#363636",width:"100px"}} className='bar'>
        <div style={{height:"100px",backgroundColor:"#999"}} className="logoBox">
          <div className="logo"></div>
          <div className='text'></div>
        </div>
        <div className="sideMenu">
          {sideMenu}
        </div>
      </div>
    )
  }
}

export default Bar