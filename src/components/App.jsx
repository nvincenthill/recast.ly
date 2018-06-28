class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: {},
      input: 'cats'
    };

    // bind this context
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
  }

  // change the current video
  handleVideoChange(video) {
    this.setState({
      currentVideo: video
    });
  }

  // handle input button clicks
  handleClick() {
    this.props.searchYouTube({q: this.state.input}, this.handleAJAXResponse.bind(this));
  }

  // handle user input from input box
  handleInput(e) {
    console.log(e);
    this.setState({
      input: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.searchYouTube({q: this.state.input}, this.handleAJAXResponse.bind(this));
    }
  }

  handleAJAXResponse(data) {
    this.setState({ videos: data.items});
    this.handleVideoChange(data.items[0]);
  }

  componentDidMount() {
    this.props.searchYouTube({q: this.state.input}, this.handleAJAXResponse.bind(this));
    window.addEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {this.state.videos.length === 0 ||
              <Search handleInput={this.handleInput} handleClick={this.handleClick}/>
            }
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {Object.keys(this.state.currentVideo).length === 0 ||
              <VideoPlayer video={this.state.currentVideo} />
            }
          </div>
          <div className="col-md-5">
            {this.state.videos.length === 0 ||
              <VideoList videos={this.state.videos} handleVideoChange={this.handleVideoChange}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
