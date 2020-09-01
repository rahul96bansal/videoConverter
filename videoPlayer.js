var player = videojs('videoPlayer1', {
    autoplay: 'muted', 
    controls: true,
    poster: "https://picsum.photos/id/100/2500/1656", 
    loop: true, 
    fluid: true,
    aspectRatio: '16:9',
    playbackRates: [0.5, 1, 2.0], 
    plugins: {
        hotkeys: {
            enableModifiersForNumbers: false,
            seekStep: 30
        }
    }
})