let redditResultsDOM = null;
let button = null;
let kanyeQuote = null;

let fetchKanye = function() {
    fetch("https://api.kanye.rest")
    .then(function(response){
        let kanyeJson = response.json();
        console.log(kanyeJson);
        return kanyeJson;
    })
    .then(function(jsonKanyeData) {
        kanyeQuote.innerText = jsonKanyeData.quote;
    })
    
    // fetch(`https://www.reddit.com/search.json?q=kanye+nsfw:no`)
    // .then(function(responseData) {
    //     let jsonData = responseData.json();
    //     return jsonData;
    // })
    // .then(function(jsonRedditData) {
    //     let results = jsonRedditData.data.children;
    //     let details = results.map(function(redditResult) {
    //         let result = {
    //             pic: redditResult.data.url,
    //             url: redditResult.data.permalink
    //         }
    //         return result;
    //     });
    //     details.forEach(function(result) {
    //         if (result.pic[result.pic.length-1]=="g") {
    //             let pic = document.createElement("img");
    //             pic.setAttribute("src", result.pic);
    //             console.log(redditResultsDOM);
    //             redditResultsDOM.appendChild(pic);
    //         }
    //     });
    //     $('#reddit-results').slick({
    //         fade: true,
    //         autoplay: true,
    //         autoplaySpeed: 2000,
    //         centerMode: true,
    //         centerPadding: '60px',
    //         responsive: [
    //             {
    //                 breakpoint: 768,
    //                 settings: {
    //                     arrows: false,
    //                     centerMode: true,
    //                     centerPadding: '40px',
    //                     slidesToShow: 1
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     arrows: false,
    //                     centerMode: true,
    //                     centerPadding: '40px',
    //                     slidesToShow: 1
    //                 }
    //             }
    //         ]
    //         //todo: align center, repeat images, fix reset
    //     });
    // })
}

document.addEventListener("DOMContentLoaded", function() {
    redditResultsDOM = document.getElementById("reddit-results");
    button = document.querySelector("button");
    kanyeQuote = document.querySelector("h1");
    console.log(button);
    fetchKanye();
    button.addEventListener("click", function() {
        fetchKanye();
    })
})