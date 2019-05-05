// Your Assignment2A JavaScript code goes here
function refresh() {
let data_record = new Set();
var today = new Date();
var day = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(day);
// let ul = document.getElementById('tweets')
var url = 'https://newsapi.org/v2/everything?' +
          'q=syrian&' +
          'from='+ day +'&' +
          'sortBy=popularity&' +
          'apiKey=6a12384bad334acba20f5b01d8bcf019';

var req = new Request(url);

fetch(req)
.then(res => res.json())
    .then(data => {

      console.log(data)
      //do something with data
      var i = 0;
      while( data_record.size <= 3 ){
      	data_record.add( { "news_source" : data.articles[i].source.name,  "date": data.articles[i].publishedAt,
      		"content" : data.articles[i].title, "news_url" : data.articles[i].url })
      	i++
      }
      data_record = Array.from(data_record)

      console.log("I am in")

      var j;
      for(j = 0; j < 3; j++){
        document.getElementById("news_date" + j).innerHTML = data_record[j].date
        document.getElementById("news_source" + j).innerHTML = data_record[j].news_source
        document.getElementById("title" + j).innerHTML = data_record[j].content
        document.getElementById("title" + j).href = data_record[j].news_url
      }

      // document.getElementById("tweet_name" + 1).innerHTML = data_record[0].name
      // document.getElementById("tweet_sname" + 1).innerHTML = data_record[0].screen_name
      // document.getElementById("tweet_info" + 1).innerHTML = data_record[0].text
      // document.getElementById("tweeter_avater" +1).src = data_record[0].profile_image_url

    })
    .catch(err => {
      //error catching
      console.log(err)
    })
}

setInterval(refresh, 15 * 60 * 1000);
refresh()
// setInterval(
//   refresh, 15 * 60 * 1000); // 60 * 1000 milsec
// var timer = setInterval(refresh, 3000);
// refresh()

// var intervalID = null;
// var flag=true;

// function intervalManager() {
//    if(flag) {
//      clearInterval(timer);
//      flag=false;
//     }
//    else {
//      timer =  setInterval(refresh, 3000);
//      flag=true;
//    }
// }

//console.log(date_record)
//document.getElementById("area").innerHTML = date_record; 