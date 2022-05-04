

function getArtistAndSong () {
    // get url
    var url = document.location.search;
    // console.log(document.location)
    // get artist name
    var artistNameArr = url.split("&");
    var artist = artistNameArr[0].split("=")[1];
    

    // get song
    songTitle = url.split("=")[2];
    console.log(artistName, songTitle);
    
};

