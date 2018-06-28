class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };

    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.handleAJAXResponse = this.handleAJAXResponse.bind(this);
  }

  handleVideoChange(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleAJAXResponse(data) {
    console.log(data);
    this.setState({ videos: data.items});
    this.handleVideoChange(data.items[0]);
  }

  componentDidMount() {
    window.searchYouTube('cats', {}, this.handleAJAXResponse);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleVideoChange={this.handleVideoChange}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
