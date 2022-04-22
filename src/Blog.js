import React from "react";
import AdminPanel from "./AdminPanel";
import BlogHeader from "./BlogHeader";
import AdminLogin from "./AdminLogin";
import Posts from "./Post";

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            appearance: 'Posts',
        }
        this.changeToAdminPanel=this.changeToAdminPanel.bind(this);
        this.changeToAdminLogin=this.changeToAdminLogin.bind(this);
        this.changeToPosts=this.changeToPosts.bind(this);

    }

    changeToAdminPanel(){
        let appearance = 'AdminPanel';
        this.setState({appearance: appearance});        
    }

    changeToAdminLogin(){
        let appearance = 'AdminLogin';
        this.setState({appearance: appearance});
    }
    changeToPosts(){
        let appearance = 'Posts';
        this.setState({appearance: appearance});
    }
  
    render(){
  
        let appearance=this.state.appearance;
        let display;
        if(appearance=='Posts'){
          display = <div><BlogHeader changeToAdminPanel={this.changeToAdminPanel} changeToAdminLogin={this.changeToAdminLogin}/><Posts/></div>;
        }else if(appearance=='AdminLogin'){
            display = <AdminLogin/>
        }else if(appearance=='AdminPanel'){
            display = <AdminPanel />
        }
  
        return(
            <div>
                {display}
            </div>
            
        );
        
    }
  }

export default Blog;