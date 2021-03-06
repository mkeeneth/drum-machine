const keyToSoundMapping = [
  { keyCode: 81, key: "Q", id: "Q-div", name: "cowbell-808" },
  { keyCode: 87, key: "W", id: "W-div", name: "kick-808" },
  { keyCode: 69, key: "E", id: "E-div", name: "kick-cultivator" },
  { keyCode: 65, key: "A", id: "A-div", name: "kick-thump" },
  { keyCode: 83, key: "S", id: "S-div", name: "kick-vinyl02" },
  { keyCode: 68, key: "D", id: "D-div", name: "openhat-analog" },
  { keyCode: 90, key: "Z", id: "Z-div", name: "perc-tribal" },
  { keyCode: 88, key: "X", id: "X-div", name: "snare-808" },
  { keyCode: 67, key: "C", id: "C-div", name: "tom-chiptune" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: ""
    };

    // set this constructor scope
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  keyDownHandler(e) {
    let targetSoundLetter = keyToSoundMapping.filter(
      key => key.keyCode === e.keyCode
    );
    this.setState({
      nowPlaying: ` - ${targetSoundLetter[0].name}`
    });
    this.playAudio(targetSoundLetter[0].key);
  }

  clickHandler(e) {
    let targetSoundLetter = keyToSoundMapping.filter(
      key => key.id === e.target.id
    );
    this.setState({
      nowPlaying: ` - ${targetSoundLetter[0].name}`
    });
    this.playAudio(targetSoundLetter[0].key);
  }

  playAudio(key) {
    let audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    this.toggleActive(audio);
  }

  toggleActive(audio) {
    let addIt = function() {
      audio.parentElement.classList.add("active");
    };
    let removeIt = function() {
      audio.parentElement.classList.remove("active");
    };
    setTimeout(function() {
      addIt();
      setTimeout(removeIt, 200);
    }, 0);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">Drum Machine {this.state.nowPlaying}</div>
        <Buttons clickHandler={this.clickHandler} />
      </div>
    );
  }
}

const Buttons = props => (
  <div id="buttons">
    <button className="drum-pad" id="Q-div" onClick={props.clickHandler}>
      Q
      <audio
        class="clip"
        id="Q"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/cowbell-808.wav"
      />
    </button>
    <button className="drum-pad" id="W-div" onClick={props.clickHandler}>
      W
      <audio
        class="clip"
        id="W"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/kick-808.wav"
      />
    </button>
    <button className="drum-pad" id="E-div" onClick={props.clickHandler}>
      E
      <audio
        class="clip"
        id="E"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/kick-cultivator.wav"
      />
    </button>
    <button className="drum-pad" id="A-div" onClick={props.clickHandler}>
      A
      <audio
        class="clip"
        id="A"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/kick-thump.wav"
      />
    </button>
    <button className="drum-pad" id="S-div" onClick={props.clickHandler}>
      S
      <audio
        class="clip"
        id="S"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/kick-vinyl02.wav"
      />
    </button>
    <button className="drum-pad" id="D-div" onClick={props.clickHandler}>
      D
      <audio
        class="clip"
        id="D"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/openhat-analog.wav"
      />
    </button>
    <button className="drum-pad" id="Z-div" onClick={props.clickHandler}>
      Z
      <audio
        class="clip"
        id="Z"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/perc-tribal.wav"
      />
    </button>
    <button className="drum-pad" id="X-div" onClick={props.clickHandler}>
      X
      <audio
        class="clip"
        id="X"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/snare-808.wav"
      />
    </button>
    <button className="drum-pad" id="C-div" onClick={props.clickHandler}>
      C
      <audio
        class="clip"
        id="C"
        src="https://raw.githubusercontent.com/mkeeneth/drum-machine/master/audio/tom-chiptune.wav"
      />
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
