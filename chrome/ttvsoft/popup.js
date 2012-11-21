// Sknetrix


var req = new XMLHttpRequest();
req.open(
    "GET",
	"http://apify.ifc0nfig.com/tpb/search?id=epg",
    true);
req.onload = muestrabusqueda;
req.send(null);

console.log("pasada peticion httprequest");

function magnetlink(href){
	window.open(href,'_blank');}

function muestrabusqueda() {
  //alert ("c"); //para verficar que se ejecuta esto directamente con tpb no me va?, revisare el XMLHttpRequest porque falla
  var resultados = req.responseText;
  var jobject=JSON.parse(resultados),
     longitud=jobject.length,
     i,enlaces='';
	/*var p= document.createElement("p");
	p.innerHTML='<a href="www.google.com" >'+'html'+'</a></p>';
	document.body.appendChild(p);
	var en=p.getElementsByTagName("a");
	var magenlace="http://www.google.com";
	en[0].addEventListener("click",function () {magnetlink (magenlace)},false)*/
	 
  for (i=0;i<longitud;i++)
  {
	var p = document.createElement("p");
	p.innerHTML='<a href="'+jobject[i].magnet+'">'+jobject[i].name+'</a>';
	document.body.appendChild(p);
	var en=p.getElementsByTagName("a");
	console.log(jobject[i].magnet)
	var magenlace=jobject[i].magnet
	en[0].addEventListener("click",function () {magnetlink (magenlace)},false)
	
  }
 
}

//chrome.tabs.onUpdated.addListener(peticion);