const search = instantsearch({
    // TODO: enter our own algolia credentials here
    appId: 'UO7IH9HF5X',
    apiKey: '4b2b7285aafcd2cf1ede2acdf3c0adeb',
    indexName: 'jndctranslation',
    routing: true
});

search.addWidget(
    instantsearch.widgets.configure({
        hitsPerPage: 8,
        distinct: true,
        clickAnalytics: true,
        facetFilters: [
            'type:post'
        ]
    })
);

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for blog'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: 'No results',
            item: '<a href="{{url}}">{{{_highlightResult.title.value}}}</a>'
        }
    })
);

search.start();

document.getElementById('search-box').getElementsByTagName("input")[0].addEventListener("input", displayResult);

document.getElementById('search-box').getElementsByTagName("button")[0].addEventListener("click", resetDisplay);

function resetDisplay() {
    document.getElementById("hits").style.display = "none";
}

function displayResult() {
    x = document.getElementById('search-box').getElementsByTagName("input")[0].value.length;
    if (x > 2) {
        document.getElementById("hits").style.display = "block";
    } else {
        document.getElementById("hits").style.display = "none";
    }
}
