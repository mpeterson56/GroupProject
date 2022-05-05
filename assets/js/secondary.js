

function getArtistAndSong () {
    // get url
    var url = document.location.search;
    // console.log(document.location)
    // get artist name
    var artistNameArr = url.split("&");
    var artist = artistNameArr[0].split("=")[1];
    

    // get song
    var songTitle = artistNameArr[1].split("=")[1];
    // console.log(artist, songTitle);

    // displayLyrics(artist, songTitle);

};

function displayLyrics (str1, str2) {
// console.log(str1, str2);

    var urlApi = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

}

getArtistAndSong();
