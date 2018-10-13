// ==UserScript==
// @name ozelotjp/dotcom-js
// @version 1.1
// @author ozelotjp
// @homepageURL https://github.com/ozelotjp/dotcom-js
// @downloadURL https://github.com/ozelotjp/dotcom-js/raw/master/app.user.js
// @match https://www.itpassportsiken.com/ipkakomon.php
// @match https://www.itpassportsiken.com/kakomon/*/*.html
// @match https://www.sg-siken.com/sgkakomon.php
// @match https://www.sg-siken.com/kakomon/*/*.html
// @match https://www.fe-siken.com/fekakomon.php
// @match https://www.fe-siken.com/kakomon/*/*.html
// @match https://www.ap-siken.com/apkakomon.php
// @match https://www.ap-siken.com/kakomon/*/*.html
// @match https://www.sc-siken.com/sckakomon.php
// @match https://www.sc-siken.com/kakomon/*/*.html
// @match https://www.nw-siken.com/nwkakomon.php
// @match https://www.nw-siken.com/kakomon/*/*.html
// @match https://www.db-siken.com/dbkakomon.php
// @match https://www.db-siken.com/kakomon/*/*.html
// @match https://www.pm-siken.com/pmkakomon.php
// @match https://www.pm-siken.com/kakomon/*/*.html
// ==/UserScript==
$(function() {
  $("#headerWrap").remove();
  $("#headerMenuWrap").remove();
  $("#sideCol").remove();
  $("#footerWrap").remove();

  $("#mainCol").css({
    display: "block",
    width: "100%"
  });

  $(window).keydown(function(event) {
    if (document.URL.match("pm*.html")) {
      // nothing
    } else {
      switch (event.key) {
        case "a":
          $(".selectBtn")[0].click();
          break;
        case "i":
          $(".selectBtn")[1].click();
          break;
        case "u":
          $(".selectBtn")[2].click();
          break;
        case "e":
          $(".selectBtn")[3].click();
          break;
      }
      switch (event.key) {
        case "a":
        case "i":
        case "u":
        case "e":
          $("html")
            .stop()
            .animate({
              scrollTop: $(".answerBox").offset().top - 50
            });
      }
      if (event.key === "Enter" && $("#kaisetsu").css("display") === "block") {
        $(".submit")[0].click();
      }
    }
  });
});
