var newsObjects = {};

// var getNews = function() {
//   // This gets the top 10 articles from the BBC via newsapi
//   $.ajax({
//     url: "https://newsapi.org/v1/articles?source=bbc-news&apiKey=eed2b952114b4e58b4b82910aff907cc",
//     type: 'GET',
//     datatype: 'json',
//     success: function(result) {
//       newsObjects = result;
//       console.log(result);
//     },
//     error: function(result) {
//       console.log("There was an error");
//     }
//   })
// }
//
// getNews();
var firstPromise = $.get("https://newsapi.org/v1/articles?source=bbc-news&apiKey=eed2b952114b4e58b4b82910aff907cc");
var secondPromise = $.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=eed2b952114b4e58b4b82910aff907cc");

$.when(firstPromise, secondPromise).done(function(result1, result2) {
  console.log("First result: ");
  console.log(result1[0]);
  console.log("Second result: ");
  console.log(result2[0]);
})


$(document).ready(function() {


  console.log(newsObjects);


  $("#make-call").click(function() {
    console.log("clicky");
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=bbc-news&apiKey=eed2b952114b4e58b4b82910aff907cc",
      type: 'GET',
      datatype: 'json',
      success: function(result) {
        console.log(result);
      },
      error: function(result) {
        console.log("There was an error");
      }
    })
  })
})
