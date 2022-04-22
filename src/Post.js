import React from "react"
import {useState, useEffect } from "react";  
import {db} from './firebase-config';
import {collection,getDocs} from "firebase/firestore";
import {
  
  
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function Posts() {
    const [posts ,setPosts] = useState([])
    const ref = collection(db,"posts")
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(ref);
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getPosts();
    }, []);
    const deletePost = async (id)=>{
      const postToDelete = doc(db,'posts',id);
      await deleteDoc(postToDelete);
    }
     return(
        
        posts.map((element) => {
            
            return (
        <div className='post'>
        <h2>{element.Tittle}
        <button className="buttonExecutoner" onClick={()=>deletePost(element.id)}>X</button>
        </h2>
        <div>
          <img src={element.Image}/> 
        </div>
        <div>
          <p>
            {element.Content}
         </p>
        </div>
      </div>
     )}))
  }
export default Posts;
