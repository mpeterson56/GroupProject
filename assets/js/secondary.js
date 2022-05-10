var lyrics = document.querySelector(".lyrics");
var createHomeLink = document.getElementById("home-link");
var tuneBlastLink = document.querySelector(".tune-blast-link");

function getArtistAndSong() {
    // get url
    var url = document.location.search;
    // get artist name
    var artistNameArr = url.split("&");
    var artist = artistNameArr[0].split("=")[1];

    // get song
    var songTitle = artistNameArr[1].split("=")[1];

    // get song ID
    var songId =artistNameArr[2].split("=")[1];
   

    displayLyrics(artist, songTitle, songId);
    createReturnLink(artist);

};

function displayLyrics(artist, song, songId) {

    var APIkey = "2272bb113a5e5a54f0040d944c8e7d08"

    var musicmatchAPI = "https://tracking.musixmatch.com/t1.0/" + APIkey + "track.lyrics.get?track_id=" + songId;

    // var urlApi = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

    // make a get request with to API
    fetch(musicmatchAPI).then(function (response) {
        console.log(response);
        if (response.ok) {
            // response.text()
            response.json().then(function (data) {
                console.log(response.text());
                // display lyrics
                lyrics.textContent = data.message.body.lyrics_body;
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
    homeLink.style.color = "Black";
    homeLink.style.decoration = "none";

    var tuneLink = document.createElement("a");
    tuneLink.href = "./index.html?artist=" + artist;
    tuneLink.text = "Tune Blast";
    tuneBlastLink.appendChild(tuneLink);
    tuneLink.style.color = "Black";
    tuneLink.style.decoration = "none";

}

getArtistAndSong();
