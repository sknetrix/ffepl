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
	window.open(href);}

function muestrabusqueda() {
  //alert ("c"); //para verficar que se ejecuta esto directamente con tpb no me va?, revisare el XMLHttpRequest porque falla
  var resultados = req.responseText;
  var jobject=JSON.parse(resultados),
     longitud=jobject.length,
     i,enlaces='<p><a href="http://google.com">google</a></p>';
	 
  for (i=0;i<longitud;i++)
  {
    enlaces+='<p><a href="'+jobject[i].magnet+'" onclick="window.open(this.href)">'+jobject[i].name+'</a></p>';
	//enlaces+='<p>'+jobject[i].magnet+'<p>';
	var p = document.createElement("p");
	p.innerHTML='<a href="'+jobject[i].magnet+'">'+jobject[i].name+'</a>';
	document.body.appendChild(p);
	var en=p.getElementsByTagName("a");
	console.log(jobject[i].magnet)
	var magenlace=jobject[i].magnet
	en[0].addEventListener("click",function () {magnetlink (magenlace)},false)
	
  }
 //alert(resultados);
  
  //p.innerHTML = resultados[0].innerHTML;
  
  //document.body.innerHTML=enlaces;
  /*var enlas=document.getElementsByTagName("a");
  for (var i = 0; i < enlas.length; i++)
  {
	enlas[i].addEventListener("click",magnetlink)
  }*/
}

//chrome.tabs.onUpdated.addListener(peticion);