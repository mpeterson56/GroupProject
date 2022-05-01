artistEl = document.querySelector(".artist");
searchButtonEl = document.querySelector(".search-btn");

function formHandler(event) {
    // keep page from refreshing
    event.preventDefault();

    var artistInput = artistEl.value;

    getDiscography(artistInput);

}

function getDiscography(artist) {
    console.log(artist);
}


searchButtonEl.addEventListener("click", formHandler);
