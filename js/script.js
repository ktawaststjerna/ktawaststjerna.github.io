window.onscroll = function() 
{
  if($(window).width() >= 1800)
  {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > document.getElementById("d1").offsetTop) 
    {
      document.getElementById("d1").style.position = "fixed";
    } 
    else if(scrollTop < document.getElementById("d1").offsetTop) 
    {
      document.getElementById("d1").style.position = "static";
    }
  }
}

function torontoMap()
{
  var mapCanvas = document.getElementById("map");
  var mapOptions = 
  {
      center: new google.maps.LatLng(43.701751, -79.453212), zoom: 15
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker
  ({
    position: {lat:43.701751, lng:-79.453212},
    map:map,
    title:'123 fakestreet'
  });
}

function calgaryMap()
{
  var mapCanvas2 = document.getElementById("map2");
  var mapOptions2 = 
  {
      center: new google.maps.LatLng(45.701751, -79.453212), zoom: 15
  }
  var map = new google.maps.Map(mapCanvas2, mapOptions2);

  var marker = new google.maps.Marker
  ({
    position: {lat:45.701751, lng:-79.453212},
    map:map,
    title:'123 fakestreet'
  });
}