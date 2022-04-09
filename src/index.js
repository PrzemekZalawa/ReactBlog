import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoremIpsum from './LoremIpsum.png';
class Post extends React.Component {
  render(){
    return(
      <div className='post'>
        <h2>Lorem Ipsum</h2>
        <div>
          <img src={LoremIpsum}/> 
        </div>
        <div>
          <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tortor at ante placerat condimentum. Aenean id justo molestie, mollis metus at, porttitor justo. Phasellus at venenatis massa. Aliquam scelerisque ac massa id semper. Vivamus ut nisi consequat, viverra lectus scelerisque, viverra urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt nunc eget nunc mollis euismod. Sed imperdiet id lectus sit amet bibendum. Mauris quis tristique tortor. Donec porta, dolor vitae eleifend condimentum, tellus nibh pulvinar diam, sed eleifend neque urna non mauris. Integer a turpis sit amet ex scelerisque bibendum a sit amet sem. Suspendisse ut libero ac elit pulvinar interdum ut ut libero. Curabitur eget consectetur quam, sit amet maximus turpis.Morbi aliquet, nisl eu ultrices sollicitudin, turpis velit convallis risus, placerat tincidunt eros diam nec ligula. Vivamus eget aliquam nunc. Donec ultricies elit ut mi placerat dapibus. Sed dignissim erat eget tellus finibus, convallis tempus nisi lobortis. Nunc sagittis eros nulla, et vestibulum turpis tristique vitae. Integer vehicula ipsum at lorem dignissim, nec placerat nisi dignissim. Nullam quis eleifend augue, at fermentum tellus. Donec ligula felis, sollicitudin tempor elit eget, pellentesque bibendum ligula. Proin cursus leo sem, et hendrerit metus 
         </p>
        </div>
      </div>
    )
  }
}
class BlogHeader extends React.Component{
  render(){
    return(
      <div className='header'>
        <div className='authors'>Przemek Zaława &amp; Mateusz Cupiał</div>
        <div className='buttons'>
          <button>Admin Panel</button>
          <button>Log in</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <BlogHeader   />
    <Post/><Post/><Post/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
