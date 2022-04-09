import React from "react";
import AdminPanel from "./AdminPanel";
import BlogHeader from "./BlogHeader";
import AdminLogin from "./AdminLogin";
import Post from "./Post";

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            appearance: 'Posts',
        }
        this.changeToAdminPanel=this.changeToAdminPanel.bind(this);
        this.changeToAdminLogin=this.changeToAdminLogin.bind(this);

    }

    changeToAdminPanel(){
        let appearance = 'AdminPanel';
        this.setState({appearance: appearance});
    }

    changeToAdminLogin(){
        let appearance = 'AdminLogin';
        this.setState({appearance: appearance});
    }
    

  
    render(){
  
        let appearance=this.state.appearance;
        let display;
        if(appearance=='Posts'){
          display = <div><BlogHeader changeToAdminPanel={this.changeToAdminPanel} changeToAdminLogin={this.changeToAdminLogin}/><Post/><Post/><Post/></div>;
        }else if(appearance=='AdminLogin'){
            display = <AdminLogin/>
        }else if(appearance=='AdminPanel'){
            display = <AdminPanel/>
        }
  
        return(
            <div>
                {display}
            </div>
            
        );
        
    }
  }

export default Blog;