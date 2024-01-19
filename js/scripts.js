$(document).ready(function() {

    $("input.slider").on("input change", function(event) {
        var element = $(this).parents("div.sliderContainer");
        var pos = event.target.value;

        element.find("div.before").css({width: pos + "%"});
        element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });

});

    if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register("serviceworker.js");
    }
    
    const urlsToCache = ["/"];
    self.addEventListener("install", (event) => {
       event.waitUntil(async () => {
          const cache = await caches.open("pwa-assets");
          return cache.addAll(urlsToCache);
       });
    });
