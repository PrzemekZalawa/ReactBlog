import React from "react"
import { Link } from "react-router-dom"

class BlogHeader extends React.Component{
    render(){
      return(
        <div className='header'>
          <div className='authors'>Przemek Zaława &amp; Mateusz Cupiał</div>
          <div className='buttons'>
            <Link to="/AdminPanel">Admin Panel</Link>
            <Link to="/AdminLogin">Log in</Link>
          </div>
        </div>
      )
    }
  }
export default BlogHeader