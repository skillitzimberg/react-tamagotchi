import React from 'react';
import Header from './Header';
import Screen from './Screen';
import Buttons from './Buttons';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sleep: 10,
      hunger: 10,
      play: 10
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
  }

  handlePlay(string) {
    console.log("Play triggered. String entered: ", string)
    let tempPlay = this.state.play;
    tempPlay --;
    this.setState({play: tempPlay})
  }

  handleFeed() {
    let tempHunger = this.state.hunger;
    tempHunger --;
    this.setState({hunger: tempHunger})
  }

  handleSleep() {
    let tempSleep = this.state.sleep;
    tempSleep --;
    this.setState({sleep: tempSleep})
  }

  render() {
    return (
      <div className='wrapper'>
        <style jsx>{`
          .wrapper {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            align-items: center;
          }
        `}
        </style>
        <Header message={'header works'}
          />
        <Screen message={'screen works'}
          parentState = {this.state}
          />
        <Buttons message={'buttons works'}
          onPlay = {this.handlePlay}
          onFeed = {this.handleFeed}
          onSleep = {this.handleSleep}
          />
      </div>
    );
  }
}

export default Tamagotchi;
