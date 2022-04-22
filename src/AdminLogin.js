import React from "react";

class AdminLogin extends React.Component{
    

    render(){
        return(
            <div className="adminLogin">
                <form >
                    <h3>Zaloguj się do panelu admina</h3>
                    <div className="adminLoginInputs">
                        <label>Login: <input type="text" name="login"/></label><br/>
                        <label>Password: <input type="password" name="password"/></label><br/>
                        <button type="submit" className="buttons">Zaloguj</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminLogin;