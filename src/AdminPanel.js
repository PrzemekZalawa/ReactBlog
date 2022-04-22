import React from "react";

class AdminPanel extends React.Component{
    
    render(){
        return(
            <div className="adminPanel">
                <form>
                    <h3>Dodaj Post</h3>
                    <label className="adminPanelInput">Tytul: <input type="text" name="title"/></label><br/>
                    <label className="adminPanelInput">Tresc posta: <textarea></textarea></label><br/>
                    <label className="adminPanelInput"><input type="file" name="file"/></label><br/>
                    <button type="submit" className="buttons">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;