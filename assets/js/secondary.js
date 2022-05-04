

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

function displayLyrics (str1, str2) {
// console.log(str1, str2);

var urlApi = "https://api.lyrics.ovh/v1/" + str1 + "/" + str2;
console.log(urlApi);

}

getArtistAndSong();
