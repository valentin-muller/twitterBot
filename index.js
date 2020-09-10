const Twitter = require('twitter');

//connect to twitter via API
const client = new Twitter({
  consumer_key: "XVYAAGG3VUEiegCrTErmTE4BS",
  consumer_secret: "s4Edu2KBoH2TCkCceapvqA8L5qEWO5Rq2Mb0g1GMcToOZ2vxST",
  access_token_key: "1303980591076061184-nhZeDIbtk7o4i24SiYGtZOjNWrT1v8",
  access_token_secret: "7wXf9L7UszH7Y0I1DNtgRFdSRTmNf1FNPSca0LZoepW13",
});
//pull next tweet from Spreadsheet - USE TEMPLATE

//send tweet
client.post("statuses/update", { status: "I Love Twitter" }, function (
  error,
  tweet,
  response
) {
  if (error) throw error;
  console.log(tweet); // Tweet body.
  console.log(response); // Raw response object.
});
//remove tweeted tweet from Spreadsheet