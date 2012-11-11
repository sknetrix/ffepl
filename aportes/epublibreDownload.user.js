// ==UserScript==
// @name        epublibreDownload
// @namespace   http://www.epublibre.tk
// @description Añade una URL de descarga a epublibre
// @include     http://www.epublibre.tk/*
// @include     http://epublibre.tk/*
// @version     1.0
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var url = document.URL;
var getUrlDownloadLink = "http://www.epublibre.tk/d.php?id=";
var bookId;
var urlDownload;

function getDivElementByClass(matchClass)
{
    var elems = document.getElementsByTagName('div'), i;
	var element = null;
    for (i in elems)
    {
        if ((" " + elems[i].className + " ").indexOf(" " + matchClass + " ") > -1)
        {
            element = elems[i];
        }
    }
	return element;
}

function getAndAddMagnetLink(fileContent)
{
	var init = fileContent.indexOf("URL=");
	if (init != -1) {
		var urlDownload = fileContent.substr(init+4);
		// Mostrar enlace de descarga
		var titulo = getDivElementByClass("det_titulo");
		var link = document.createElement('a');
		link.setAttribute("href",urlDownload);
		link.innerHTML="&nbsp;(Descargar)";
		titulo.appendChild(link);
	} else {
	}
}

// Si la página es de libro (y no otra sección)
if (url.indexOf("libro") != -1) {
	// Obtener el id del libro
	bookId = url.substring(url.lastIndexOf("/")+1);
	// Enviar consulta a los servidores
	/*GM_xmlhttpRequest({
		method: "GET",
		url: getUrlDownloadLink+bookId,
		onload: function(response) {
			getAndAddMagnetLink(response.responseText);
		}
	});*/
	getAndAddMagnetLink("URL=http://www.download.com/");
}

