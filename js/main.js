window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

function getQuote(author, text) {

  var forismaticURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  var author = $('#author');
  var text = $('#quote-text');
  var tweet = $("#tweet-this");
    $('blockquote').hide();

  $.getJSON(forismaticURL, function(data) {
    $('blockquote').fadeIn('slow');
    text.html(data.quoteText);
    if (data.quoteAuthor) {
      author.html('- ' + data.quoteAuthor);
      author.attr("href", data.quoteLink);
    } else {
      author.removeAttr("href");
      author.html("<strong>Anonymous</strong>");
    }

    tweet.html("<i class='fa fa-twitter fa-2x' aria-hidden='true'></i>");
    tweet.attr("href","https://twitter.com/intent/tweet?url=&text="+ data.quoteText + 'By - ' + data.quoteAuthor);


  });
}
