<?php include('layout/header.php'); ?>

<h1>Inspire Me.</h1>
<p>Use the button below to get inspired.</p>
<input type="button" onClick="getQuote();" value="Get Inspired"/>
<div class="box">
  <blockquote>
    <p id="quote-text"></p>

      <p><a id="tweet-this"></a></p>
      <a id="author" target="_blank"></a>

  </blockquote>
</div>

<?php include('layout/footer.php'); ?>
