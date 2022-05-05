var lyrics = document.querySelector(".lyrics");
var createHomeLink = document.getElementById("home-link");

function getArtistAndSong() {
    // get url
    var url = document.location.search;
    // get artist name
    var artistNameArr = url.split("&");
    var artist = artistNameArr[0].split("=")[1];


    // get song
    var songTitle = artistNameArr[1].split("=")[1];
    // console.log(artist, songTitle);

    displayLyrics(artist, songTitle);
    createReturnLink(artist);

};

function displayLyrics(artist, song) {

    var urlApi = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

    // make a get request with to API
    fetch(urlApi).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                // display lyrics
                lyrics.textContent = data.lyrics;
            });
        }
        else {
            UIkit.modal.dialog('Error'+ response.statusText);
        }
    });

};

function createReturnLink (artist) {
    var homeLink = document.createElement("a");
    homeLink.href = "./index.html?artist=" + artist;
    homeLink.text = "Return to Home Page";
    createHomeLink.appendChild(homeLink);
    homeLink.style.color = "black";
}

getArtistAndSong();
