import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Webcam from 'react-webcam';
import Lightbox from 'react-images';
import Card from './card.js'
class App extends Component {
  constructor(){
    super();
    this.state={
      sceen:null,
      image:'./bg.png'
    }
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
    this.setState({sceen:imageSrc})
  };

  render() {
    const avatarStyle ={
        backgroundImage: "url('./bg.png')"
    };
    return (
      <div>
      <div>
        <h1 className="title1">Stupid Hackathon</h1>
        <Webcam
          audio={false}
          height={450} 
          width={450}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
        />
        <br/>
          <a href="#data"><button className="button is-primary" onClick={this.capture}>Capture photo</button></a>
          &nbsp;
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <p id="data">{this.state.sceen ?  <div style={{width:450,height:450,marginLeft:460}}>
             <h3 className="title2">Caption For you </h3>
             <Card im={this.state.sceen}/>
             </div> : null} </p>   
      </div>
      <br/><br/><br/><br/>
      </div>
    );
  }
}
export default App;
