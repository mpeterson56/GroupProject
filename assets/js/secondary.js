var lyrics = document.querySelector(".lyrics");

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

    displayLyrics(artist, songTitle);

};

function displayLyrics (artist, song) {
// console.log(str1, str2);

var urlApi = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
// console.log(urlApi);

// make a get request with to API
fetch(urlApi).then(function(response){
    if (response.ok) {
        response.json().then(function(data) {
         console.log(data);  
         // display lyrics
         lyrics.textContent = data.lyrics;
        //  // add spaces
        //  document.write("<br><br>");
        //  var homeLink = document.createElement("a");
        //  homeLink.href = "./index.html?artist=" + artist;
        // lyrics.appendChild(homeLink);

        });
    }
    else {
        alert("Error: " + response.statusText);
    }
});

};

getArtistAndSong();