// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var req = new XMLHttpRequest();
req.open(
    "GET",
	"http://thepiratebay.se/search/epublibre+-+Un+mundo+feliz/0/99/601",
    true);
	alert ("a");
req.onload = muestrabusqueda;
    alert ("b");
req.send(null);

function muestrabusqueda() {
  alert ("c");
  //var resultados = req.responseXML.getElementsByTagName("h2");
  alert("d");
    //var p = document.createElement("p");
    //p.innerHTML = resultados[0].innerHTML;
    //document.body.appendChild(p);
	//document.body.innerHTML='<p>texto de prueba</p>'

}

// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo) {
  return "http://farm" + photo.getAttribute("farm") +
      ".static.flickr.com/" + photo.getAttribute("server") +
      "/" + photo.getAttribute("id") +
      "_" + photo.getAttribute("secret") +
      "_s.jpg";
}
