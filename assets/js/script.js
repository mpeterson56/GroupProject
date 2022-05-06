artistEl = document.querySelector(".artist");
searchButtonEl = document.querySelector(".search-btn");
songList = document.querySelector(".song-list");

function formAndLinkHandler(event) {
    // keep page from refreshing 
    event.preventDefault();

    // location.reload();

    var artistInput = artistEl.value;

        getDiscography(artistInput);

}

function getDiscography(artist) {
    
    // check to see if song list exists
    if (songList.children.length !== 0) {
        songList.innerHTML = "";
    
    }

    var APIkey = "2272bb113a5e5a54f0040d944c8e7d08"

    // check for spaces in the name and add a "+"
    if (artist.match(/\s/)) {
        var a = artist.split(' ').join('+');
        var APIurl = "https://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + a + "&page_size=10&page=1&s_track_rating=desc";

    } else {
        var APIurl = "https://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + artist + "&page_size=10&page=1&s_track_rating=desc";
        console.log(APIurl);
    }

    fetch(APIurl).then(function (response) {
        if (!response.ok) {
            UIkit.modal.dialog("Can't access track list!");
        } else if (response.ok) {
            response.json().then(function (data) {
                var trackListArr = data.message.body.track_list;
                console.log(trackListArr);
                // create for loop
                for (var i = 0; i < trackListArr.length; i++) {
                    var trackList = data.message.body.track_list[i].track.track_name;
                    // replace spaces in song title with +
                    if (trackList.match(/\s/)) {
                        var tracks = trackList.split(' ').join('+');
                    }

                    // create list elements
                    var listEl = document.createElement("li");

                    if (a !== undefined) {
                    listEl.innerHTML = "<a href=./secondary.html?artist=" + a + "&song=" + tracks + ">" + trackList + "</a>";
                    }
                    else {
                        listEl.innerHTML = "<a href=./secondary.html?artist=" + artist + "&song=" + tracks + ">" + trackList + "</a>";
                    }
                    songList.appendChild(listEl);
                    // console.log(listEl);
                }

            });
        } else {
            UIkit.modal.dialog('ERROR!' + response.statusText);
        }
    })
        .catch(function (error) {
            UIkit.modal.dialog('Please enter valid artist!');
        });
}

function getArtistName() {
    var artistName = document.location.search;
    var url = document.location.search.includes("?");


    // check for query string
    if (url) {
        // get artist name from query string pass it to lookup function
        var artistNameArr = artistName.split("=");
        var artist = artistNameArr[1];
            getDiscography(artist);
            console.log(artist);
    }
    else {
        console.log("getArtistName had 0 results")
        return;

    }

}

getArtistName();

if (searchButtonEl) {
    searchButtonEl.addEventListener("click", formAndLinkHandler);
}
