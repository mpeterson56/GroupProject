

function getArtistAndSong () {
    // get url
    var url = document.location.search;

    // get artist name
    artistName = url.split("=")[1];

    // get song
    songTitle = url.split("=")[2];
    console.log(artistName, songTitle);
    
};