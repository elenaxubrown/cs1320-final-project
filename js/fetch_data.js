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

    var j;
    for(j = 0; j < 3; j++){
      // console.log(typeof data_record[j].date)
      document.getElementById("news_date" + j).innerHTML = data_record[j].date.slice(0, 10)
      document.getElementById("news_time" + j).innerHTML = data_record[j].date.slice(12, 19)
      document.getElementById("news_source" + j).innerHTML = data_record[j].news_source
      document.getElementById("title" + j).innerHTML = data_record[j].content
      document.getElementById("title" + j).href = data_record[j].news_url
    }
  })
  .catch(err => {
    //error catching
    console.log(err)
  })
  }

setInterval(refresh, 15 * 60 * 1000);
refresh()
