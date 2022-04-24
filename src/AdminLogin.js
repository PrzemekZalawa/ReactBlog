import React from "react";
import { Link } from "react-router-dom"

class AdminLogin extends React.Component{
    
    constructor(props){
        super(props);  
    }


    render(){
        return(
            <div className="adminLogin">
                <form >
                    <h3>Zaloguj się do panelu admina</h3>
                    <div className="adminLoginInputs">
                        <label>Login: <input type="text" name="login" value={this.props.login} onChange={this.props.handleLogin}/></label><br/>
                        <label>Password: <input type="password" name="password" value={this.props.password} onChange={this.props.handlePassword}/></label><br/>
                        <button type="button" className="buttons" onClick={this.props.handleSubmit}><Link to="/">Zaloguj</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminLogin;