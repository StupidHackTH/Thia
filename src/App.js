import React, {Component} from 'react';
import './App.css';
import Webcam from 'react-webcam';
class App extends Component {
  constructor(){
    super();
    this.state={
      sceen:null
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
  onSave=()=>{
     let a = document.createElement('a');
     a.href = this.state.sceen;
     a.download = 'image.png';
     a.click()
  }
  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
          <button onClick={this.capture}>Capture photo</button>
          <button onClick={this.onSave}>save</button>
          {this.state.sceen ? <img src={this.state.sceen} /> : null}
      </div>
    );
  }
}
export default App;
