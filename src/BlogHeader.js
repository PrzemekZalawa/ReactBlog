import React from "react"
import { Link } from "react-router-dom"

class BlogHeader extends React.Component{
    render(){
      let isLoggedIn1;
      let isLoggedIn2;
      if(!this.props.isLoggedIn){
        isLoggedIn1='stopDisplaying';
        isLoggedIn2=''
      }else{
        isLoggedIn1='';
        isLoggedIn2='stopDisplaying'
      }

      return(
        <div className='header'>
          <div className='authors'>Przemek Zaława &amp; Mateusz Cupiał</div>
          <div className='buttons'>
            <button className={isLoggedIn1}><Link to="/AdminPanel">Admin Panel</Link></button>
            <button className={isLoggedIn2}><Link to="/AdminLogin">Log in</Link></button>
            <button className={isLoggedIn1} onClick={this.props.loggingOut}>Log out</button>
          </div>
        </div>
      )
    }
  }
export default BlogHeader