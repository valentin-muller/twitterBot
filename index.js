const Twitter = require("twitter");
const Sheet = require("./sheet");

(async function () {

  //connect to twitter via API
  const client = new Twitter({
    consumer_key: "XVYAAGG3VUEiegCrTErmTE4BS",
    consumer_secret: "s4Edu2KBoH2TCkCceapvqA8L5qEWO5Rq2Mb0g1GMcToOZ2vxST",
    access_token_key: "1303980591076061184-nhZeDIbtk7o4i24SiYGtZOjNWrT1v8",
    access_token_secret: "7wXf9L7UszH7Y0I1DNtgRFdSRTmNf1FNPSca0LZoepW13",
  });

  //pull next tweet from Spreadsheet - USE TEMPLATE
  const sheet = new Sheet();
  await sheet.load();
  const quotes = await sheet.getRows();
  const status = quotes[4]._rawData.toString();
  
  
  //send tweet
  client.post("statuses/update", { status }, function (
    error,
    tweet,
    response
  ) {
    if (error) throw error;
    console.log(tweet); // Tweet body.
  });
  //remove tweeted tweet from Spreadsheet
await quotes[4].delete();

console.log("tweeted", quotes[4]._rawData);
})();
