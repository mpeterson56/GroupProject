artistEl = document.querySelector(".artist");
searchButtonEl = document.querySelector(".search-btn");
songList = document.querySelector(".song-list");

function formHandler(event) {
    // keep page from refreshing 
    event.preventDefault();

    var artistInput = artistEl.value;
    // console.log(artistInput);
    
    getDiscography(artistInput);

}

function getDiscography(artist) {
    var APIkey = "2272bb113a5e5a54f0040d944c8e7d08"
    
    // check for spaces in the name and add a "+"
    if (artist.match(/\s/)) {
        var a = artist.split(' ').join('+');
        var APIurl = "http://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + a + "&page_size=3&page=1&s_track_rating=desc";
        // console.log(APIurl);
        
    } else {
        var APIurl = "http://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + artist + "&page_size=3&page=1&s_track_rating=desc";
    }
    
    fetch(APIurl).then(function(response) {
        if (!response.ok) {
            alert("Please enter a valid artist!");
        } else if (response.ok) {
            response.json().then(function(data) {
                var trackListArr = data.message.body.track_list;
                console.log(trackListArr);
                // create for loop
                for (var i = 0; i < trackListArr.length; i++) {
                    var trackList = data.message.body.track_list[i].track.track_name;
                    // replace spaces in song title with +
                    if (trackList.match(/\s/)) {
                        var a = trackList.split(' ').join('+');
                    }
                
                    console.log(trackList);
                    // create list elements
                    var listEl = document.createElement("li");
                    // listEl.classList = "list-item";
                    listEl.innerHTML = "<a href=./secondary.html?artist=" + artist + "&song=" + a + ">" + trackList + "</a>";
                    songList.appendChild(listEl);
                    // console.log(listEl);
                }
            
                // add attribute to launch lyrics in new window (target, _target)
                // create span element to to hold every thing
                // add it to the list
                // append to dom container
                
            });
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function (error) { 
        alert("Can't access track list!");
    });
}

if (searchButtonEl) {
searchButtonEl.addEventListener("click", formHandler);
}
