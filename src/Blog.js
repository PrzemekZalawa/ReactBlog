import React from "react";
import AdminPanel from "./AdminPanel";
import BlogHeader from "./BlogHeader";
import AdminLogin from "./AdminLogin";
import Posts from "./Post";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

class Blog extends React.Component{

    constructor(props){
        super(props);
        this.state={
            login: '',
            password: '',
            loggedIn: false
        }

        this.handleLoginChange=this.handleLoginChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.loggingOut=this.loggingOut.bind(this);
    }

    handleLoginChange(event){
        this.setState({login: event.target.value})
        console.log(this.state.login)
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    handleSubmit(){
        let login = this.state.login;
        let password = this.state.password;
        if(login=='admin'&&password=='password'){
            let isLoggedIn=true;
            this.setState({loggedIn: isLoggedIn})
        }
        console.log(this.state.loggedIn)
    }

    loggingOut(){
        this.setState({password: '', login: '', loggedIn: false});
    }
    
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<div><BlogHeader isLoggedIn={this.state.loggedIn} loggingOut={this.loggingOut}/><Posts loggedIn={this.state.loggedIn}/></div>}/>
                        <Route path='AdminPanel' element={<AdminPanel/>}/>
                        <Route path='AdminLogin' element={<AdminLogin handleLogin={this.handleLoginChange} handlePassword={this.handlePasswordChange} 
                            login={this.state.login} password={this.state.password} handleSubmit={this.handleSubmit}/>}/>
                    </Routes>
    
                </BrowserRouter>
            </div>
            
        );
        
    }
  }

export default Blog;