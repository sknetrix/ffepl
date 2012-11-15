// Sknetrix



var req = new XMLHttpRequest();
req.open(
    "GET",
	"http://apify.ifc0nfig.com/tpb/search?id=juego de tronos epub",
    true);
req.onload = muestrabusqueda;
req.send(null);


function muestrabusqueda() {
  //alert ("c"); //para verficar que se ejecuta esto directamente con tpb no me va?, revisare el XMLHttpRequest porque falla
  var resultados = req.responseText;
  var jobject=JSON.parse(resultados),
     longitud=jobject.length,
     i,enlaces='';
	 
  for (i=0;i<longitud;i++)
  {
    enlaces+='<p><a href="'+jobject[i].magnet+'">'+jobject[i].name+'</a></p>';
	enlaces+='<p>'+jobject[i].magnet+'<p>';
  }
 //alert(resultados);
  var p = document.createElement("p");
  //p.innerHTML = resultados[0].innerHTML;
  document.body.appendChild(p);
  document.body.innerHTML=enlaces;
}

chrome.tabs.onUpdated.addListener(peticion);