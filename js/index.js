const keyToSoundMapping = [
  { keyCode: 81, key: "Q", id: "Q-div", name: 'sound1' },
  { keyCode: 87, key: "W", id: "W-div", name: 'sound2'  },
  { keyCode: 69, key: "E", id: "E-div", name: 'sound3'  },
  { keyCode: 65, key: "A", id: "A-div", name: 'sound4'  },
  { keyCode: 83, key: "S", id: "S-div", name: 'sound5'  },
  { keyCode: 68, key: "D", id: "D-div", name: 'sound6'  },
  { keyCode: 90, key: "Z", id: "Z-div", name: 'sound7'  },
  { keyCode: 88, key: "X", id: "X-div", name: 'sound8'  },
  { keyCode: 67, key: "C", id: "C-div", name: 'sound9'  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       nowPlaying: ''
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
    document.getElementById(targetSoundLetter[0].key).play();
  }

  clickHandler(e) {
    let targetSoundLetter = keyToSoundMapping.filter(
      key => key.id === e.target.id
    );
    this.setState({
      nowPlaying: ` - ${targetSoundLetter[0].name}`
    });
    document.getElementById(targetSoundLetter[0].key).play();
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
      Q<audio class="clip" id="Q" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="W-div" onClick={props.clickHandler}>
      W<audio class="clip" id="W" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="E-div" onClick={props.clickHandler}>
      E<audio class="clip" id="E" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="A-div" onClick={props.clickHandler}>
      A<audio class="clip" id="A" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="S-div" onClick={props.clickHandler}>
      S<audio class="clip" id="S" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="D-div" onClick={props.clickHandler}>
      D<audio class="clip" id="D" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="Z-div" onClick={props.clickHandler}>
      Z<audio class="clip" id="Z" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="X-div" onClick={props.clickHandler}>
      X<audio class="clip" id="X" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
    <button className="drum-pad" id="C-div" onClick={props.clickHandler}>
      C<audio class="clip" id="C" src="https://freesound.org/data/previews/254/254819_4597795-lq.mp3" />
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
