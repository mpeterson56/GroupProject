artistEl = document.querySelector(".artist");
searchButtonEl = document.querySelector(".search-btn");

function formHandler(event) {
    // keep page from refreshing 
    event.preventDefault();

    var artistInput = artistEl.value;
    
    getDiscography(artistInput);

}

function getDiscography(artist) {
    var APIkey = "2272bb113a5e5a54f0040d944c8e7d08"
    var APIurl = "http://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=justin%20bieber&page_size=3&page=1&s_track_rating=desc";
    console.log(APIurl)
    
    fetch(APIurl).then(function(response) {
        if (!response.ok) {
            alert("Please enter a valid artist!");
        } else if (response.ok) {
            response.json().then(function(data) {
                var trackList = data.message.body.track_list[0].track.track_name
                console.log(trackList);
            })
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function (error) { 
        alert("Can't access track list!");
    });
}

searchButtonEl.addEventListener("click", formHandler);