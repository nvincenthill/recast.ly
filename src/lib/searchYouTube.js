var searchYouTube = (query, options, callback) => {
  console.log('searchingYT', query);
  $.ajax({
    data: {
      q: query,
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
      console.log('Successful fetch');
      callback(response);
    },
    error: function() {
      console.log('Failed to fetch!');
    }
  });
};

window.searchYouTube = searchYouTube;
