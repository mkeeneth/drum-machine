class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // set this constructor scope
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">Drum Machine</div>
        <div id="buttons">
          <button className="drum-pad" id="Q-div">
            Q<audio class="clip" id="Q" src="" />
          </button>
          <button className="drum-pad" id="W-div">
            W<audio class="clip" id="W" src="" />
          </button>
          <button className="drum-pad" id="E-div">
            E<audio class="clip" id="E" src="" />
          </button>
          <button className="drum-pad" id="A-div">
            A<audio class="clip" id="A" src="" />
          </button>
          <button className="drum-pad" id="S-div">
            S<audio class="clip" id="S" src="" />
          </button>
          <button className="drum-pad" id="D-div">
            D<audio class="clip" id="D" src="" />
          </button>
          <button className="drum-pad" id="Z-div">
            Z<audio class="clip" id="Z" src="" />
          </button>
          <button className="drum-pad" id="X-div">
            X<audio class="clip" id="X" src="" />
          </button>
          <button className="drum-pad" id="C-div">
            C<audio class="clip" id="C" src="" />
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
