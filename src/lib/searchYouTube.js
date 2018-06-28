var searchYouTube = (options, callback) => {
  $.ajax({
    data: {
      q: options.q,
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true
    },
    url: 'https://www.googleapis.com/youtube/v3/search?',
    type: 'GET',
    dataType: 'jsonp',
    success: function(response) {
      // console.log('Successful fetch');
      callback(response);
    },
    error: function() {
      // console.log('Failed to fetch!');
    }
  });
};

window.searchYouTube = searchYouTube;
