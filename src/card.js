import React, { Component } from 'react'
import { FacebookButton, FacebookCount } from "react-social";
import  key from './footer'
export default class Card extends Component {
    constructor(){
        super();
        this.state={
          sceen:null,
          image:'./bg.png'
        }
      }
componentDidMount(){
     //console.log(this.props.match.params.id)
}
onSave=()=>{
        let a = document.createElement('a');
        a.href = this.state.sceen;
        a.download = 'image.png';
        a.click()
        }
render() {
        console.log(this.props)
        let url = "https://github.com";
        const appId="347460905704240";
return (
<div  className="App">
 <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img  src={this.props.im} alt="Placeholder image"/>
    </figure>
  </div>
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
         <a className='button is-white' href="#">Cancel</a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className="button is-danger" onClick={this.onSave}>save</button>
      </span>
    </p>
    <p className="card-footer-item" >
    <FacebookButton className="button is-primary" url={url} appId={appId}>
          Share  on facebook
    </FacebookButton>
    </p>
  </footer>
</div>
        )
    }
}