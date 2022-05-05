var lyrics = document.querySelector(".lyrics");
var createHomeLink = document.getElementById("home-link");

function getArtistAndSong() {
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

function displayLyrics(artist, song) {

    var urlApi = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
    // console.log(urlApi);

    // make a get request with to API
    fetch(urlApi).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                // display lyrics
                lyrics.textContent = data.lyrics;
                var homeLink = document.createElement("a");
                homeLink.href = "./index.html?artist=" + artist;
                homeLink.text = "Return to Home Page";
                createHomeLink.appendChild(homeLink);

            });
        }
        else {
            alert("Error: " + response.statusText);
        }
    });

};

getArtistAndSong();
