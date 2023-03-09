//#region Popup Video

const popVideo = document.querySelector('#popVideo');
const play_btn = document.querySelector('.play_btn');
const close_btn = document.querySelector('.close_btn');


play_btn.addEventListener('click', () => {
   popVideo.classList.toggle('active');
});

close_btn.addEventListener('click', () => {
   popVideo.classList.toggle('active');
   stopVideo();
});




var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var promotion_video;
function onYouTubeIframeAPIReady() {
  promotion_video = new YT.Player('promotion_video', {
  //   height: '100%',
  //   width: '100%',
    videoId: 'faGvbCUHnGI',
    events: {
      // 'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  promotion_video.stopVideo();
}

// ref:https://developers.google.com/youtube/iframe_api_reference?hl=ko#Playback_controls
//#endregion 
