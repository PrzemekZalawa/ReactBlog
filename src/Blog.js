import React from "react";
import AdminPanel from "./AdminPanel";
import BlogHeader from "./BlogHeader";
import AdminLogin from "./AdminLogin";
import Posts from "./Post";

class Blog extends React.Component{
    
    render(){
        return(
            <div>
                <BlogHeader/><Posts/>
            </div>
            
        );
        
    }
  }

export default Blog;