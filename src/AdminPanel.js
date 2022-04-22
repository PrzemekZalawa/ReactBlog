import React from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import {db, storage} from './firebase-config';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";



function AdminPanel (){
  // const [progress, setProgress] = useState(0);
    const [Tittle, setTittle] = useState("");
    const [Content, setContent] = useState("");
    const [Image, setImage] = useState("");
    const [Url, setUrl] = useState("");
    const reference = useRef();
    

    const uploadImage = () =>{
      if (Image == null) return;
      const imageRef = ref(storage, `images/${Image.name}`);
      uploadBytes(imageRef, Image).then((snapshot) => {
        // console.log("  \ndziaua :D");

        getDownloadURL(snapshot.ref).then((url)=>{
          // console.log(url + "  \ndziaua :D");
          setUrl(url);
          
        })
      });

    }
    useEffect(() => { // this hook will get called everytime when myArr has changed
      // perform some action which will get fired everytime when myArr gets updated
        if(Tittle!="" || Content!="" || Url!="")
        {
         console.log('Updated State', Url)
         addDoc(collection(db,"posts"), { Tittle: Tittle, Content: Content, Image:Url});
        }
      }, [Url])
  
  
    const createPost = () => {      
      // e.preventDefault();
      // const storageRef = storage.ref(storage, `images/${Image.name}`);
      // // const ref = storage.ref(`/images/${file.name}`);
      // const uploadTask = storageRef.put(Image);
      // uploadTask.on("state_changed", console.log, console.error, () => {
      //   ref
      //     .getDownloadURL()
      //     .then((url) => {
      //       setUrl(url);
      //     });
      // });
      uploadImage();
    };
    
    

    
      
        return(
            <div className="adminPanel">
                {/* <form> */}
                    <h3>Dodaj Post</h3>
                    <label className="adminPanelInput">Tytul: <input type="text" name="title"
                     onChange={(event) => {setTittle(event.target.value)}}/></label><br/>
                    <label className="adminPanelInput">Tresc posta: <textarea
                    onChange={(event) => {setContent(event.target.value)}}></textarea></label><br/>
                    <label className="adminPanelInput"><input type="file" name="file" 
                    onChange={(event)=>  {setImage(event.target.files[0])}}/></label><br/>
                    <button type="submit" className="buttons" onClick={createPost}>Dodaj Post</button>
                    {/* <button onClick={this.props.changeToPosts}>Powrót do strony głównej</button> */}
                {/* </form> */}
            </div>
        )   
}
export default AdminPanel;