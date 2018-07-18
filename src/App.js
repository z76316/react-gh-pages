import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import soccerIcon from './img/if_Soccer_Ball_22984.png';
import upsetMessi from './img/upset-messi.jpg';
import neymarOscar from './img/neymar-oscar.jpg';
import gambleSoccer from './img/gamble-soccer.jpg';
import fans from './img/fans.jpg';

var show = false;


function ContentBox(prop) {
  let img = (prop.image);
  console.log(img);

  return (
    <div className="box col">
      <h2>{prop.title}</h2>
        <img src={prop.image} alt={prop.title} />
      <p>{prop.content}</p>
    </div>
  );
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function ShowMore() {
  return (
    <div>
      <button id="toggleBox" onClick={() => {show = true; console.log(show)}}>Show more</button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
  
        <div className="mobile-float-menu">
          <button className="x">x</button>
          <ul>
            <li><a href="#">Team</a></li>
            <li><a href="#">Player</a></li>
            <li><a href="#">Addictive</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </div>

        <header className="main-header">
          <div className="container clearfix">
            <div className="logoAndTitle">
              <img className="logo" src={soccerIcon} alt="Soccer" />
              <p className="title">Beyond World Cup</p>
            </div>
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>  
            
            <ul className="main-nav">
              <li><a href="#">Team</a></li>
              <li><a href="#">Player</a></li>
              <li><a href="#">Addictive</a></li>
              <li><a href="#">About Me</a></li>
            </ul>
            
          </div>
        </header> 
        {/*<!--/.main-header-->*/}

        <div className="banner">
          <h1 className="headline">Destiny</h1>
          <span className="tagline">That is the owner of World Cup and why you here.</span>
        </div> 
        {/*<!--/.banner-->*/}
        
        <div className="container clearfix">
          <h1 className="sec-title">Something Charming</h1>
          <ContentBox title="Upset" image={require("./img/upset-messi.jpg")} content="Underdogs always hold huge hope." />
          <ContentBox title="Acting" image={require("./img/neymar-oscar.jpg")} content="And the Oscar Goes to... Neymar！" />
          <ContentBox title="Gamble" image={require("./img/gamble-soccer.jpg")} content="I have a dream that one day..." />
          <ContentBox title="Fans" image={require("./img/fans.jpg")} content="They are the most crazy animal in the planet." />
          
        
        <div style={{textAlign: 'center'}}>
          <ShowMore />
          </div>
          {/*<!-- showing up or hiding is control by button #toggleBox -->*/}
          <div className="hiding-first">
            <div className="box col">
                <h2>Box 5</h2>
                  <img src={upsetMessi} alt="Upset" />
                <p>Underdog always hold huge hope.</p>
              </div> 
              {/*<!--/.box-5-->*/}
              
              <div className="box col">
                <h2>Box 6</h2>
                  <img src={neymarOscar} alt="Acting" />
                <p>And the Oscar Goes to... Neymar！</p>
              </div> 
              {/*<!--/.box-6-->*/}
              
              <div className="box col">
                <h2>Box 7</h2>
                  <img src={gambleSoccer} alt="Gamble" />
                <p>I have a dream that one day the soccer lottery in my pocket becomes...</p>
              </div> 
              {/*<!--/.box-7-->*/}

              <div className="box col">
                <h2>Box 8</h2>
                  <img src={fans} alt="Fans" />
                <p>They are the most crazy animal in the planet.</p>
              </div> 
              {/*<!--/.box-8-->*/}
          </div>

        </div>

        <footer className="main-footer">
          <span>&copy;2018 Zhonghe La La Mountain</span>
        </footer>
        
      </div>
    );
  }
}

export default App;
