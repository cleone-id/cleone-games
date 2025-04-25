function loadGoogleAnalytics(id) {
  // Google tag (gtag.js)
  var firstScript= document.getElementsByTagName("script")[0];
  newScript= document.createElement("script");
  newScript.async= "";
  newScript.src= "https://www.googletagmanager.com/gtag/js?id="+ id;
  firstScript.parentNode.insertBefore(newScript, firstScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', id);
}

window.addEventListener("load", (event) => {
  if (navigator.webdriver) {
    loadGoogleAnalytics("G-LE1ZGTPC77");
    console.log('Bot Browser', event);
  } else {
    if (window.location.href.indexOf(".games235.com")> -1) {
        loadGoogleAnalytics("G-9TFK9146KD");
    } else {
        loadGoogleAnalytics("G-9TFK9146KD");
    }
    console.log('Human Browser', event);
  }
});
