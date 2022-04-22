import React from "react"

class BlogHeader extends React.Component{
    render(){
      return(
        <div className='header'>
          <div className='authors'>Przemek Zaława &amp; Mateusz Cupiał</div>
          <div className='buttons'>
            <button onClick={this.props.changeToAdminPanel}>Admin Panel</button>
            <button onClick={this.props.changeToAdminLogin}>Log in</button>
          </div>
        </div>
      )
    }
  }
export default BlogHeader