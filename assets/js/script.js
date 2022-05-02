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
    
    // check for spaces in the name and add a "+"
    console.log(APIurl)

    if (artist.match(/\s/)) {
        var a = artist.split(' ').join('+');
        var APIurl = "http://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + a + "&page_size=3&page=1&s_track_rating=desc";
        console.log(APIurl);
        
    } else {
        var APIurl = "http://api.musixmatch.com/ws/1.1/track.search?apikey=" + APIkey + "&q_artist=" + artist + "&page_size=3&page=1&s_track_rating=desc";
    }
    
    fetch(APIurl).then(function(response) {
        if (!response.ok) {
            alert("Please enter a valid artist!");
        } else if (response.ok) {
            response.json().then(function(data) {
                var trackList = data.message.body.track_list[0].track.track_name
                console.log(trackList);
                // create for loop
                // create counter
                // create element "a"
                // add class list with UIkit attributes
                // add href with data track list. make inex dynamic 
                // add attribute to launch lyrics in new window (*, _target)
                // create span element to to hold every thing
                // add it to the list
                // append to dom container
                // increment index count by one
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

// q_artist=justin%20bieber